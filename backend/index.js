import express, { json } from "express";
import { Client } from "pg";
import dotenv from "dotenv";
import brcypt from "bcrypt";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 5432,
});

db.connect().then(() => {
  console.log("Connected to Database");
});

const app = express();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

function verifytoken(req,res,next){
  try {
    const token = req.cookies.token
    if(!token){ return res.status(404).json({message: 'Token not found'}) }
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    console.log(error)
  }
}

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.post("/api/signup", async (req, res) => {
  try {
    const { full_name, country, email, password } = req.body;
    const Hashedpassword = await brcypt.hash(password, 10);
    console.log(full_name,country,email,password)
    await db.query(
      "INSERT INTO users(name, country, email, password) VALUES($1,$2,$3,$4)",
      [full_name, country, email, Hashedpassword]
    );
    res.status(200).json({ message: "Account Created Successfully" });
  } catch (error) {
    console.log(error)
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, Inputpassword } = req.body;

    const user = await db.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    // console.log(user)

    if (user.rows.length == 0) {
      return res.status(200).json({ message: "User not found" });
    }

    const password = await db.query(
      "SELECT password FROM users WHERE email=$1",
      [email]
    );
    const Hashedpassword = password.rows[0].password
    const PasswordCorrect = await brcypt.compare(Inputpassword, Hashedpassword);

    if (PasswordCorrect) {
        console.log(user.rows[0].id)
        console.log(user.rows[0].name)
      const token = jwt.sign(
        { user_id: user.rows[0].id, full_name: user.rows[0].name },
        JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000,
        secure: false
      });
      res.status(200).json({ message: "User Logged in successfull" });
    }else{
        res.status(405).json({message: 'Password doesn`t match' })
    }
  } catch (error) {
    console.log(error)
  }
});

app.post('/api/create-project', verifytoken  , async (req,res)=>{
  try {
      const { project_name } = req.body
  console.log(project_name)
  console.log(req.user)
  await db.query('INSERT INTO projects(user_id, name) VALUES($1,$2)', [req.user.user_id, project_name])
  res.status(200).json({message: 'Project Create Successfully', project_name, id: req.user.user_id})
  } catch (error) {
    console.log(error)
  }

})

app.get('/api/all-project' , async (req,res)=>{
  try {
  const project = await db.query('SELECT name from projects')
  res.status(200).json({message: 'Project Create Successfully', project})
  } catch (error) {
    console.log(error)
  }
})

app.get('/api/all-tasks', async (req,res)=>{
  const tasks = await db.query('SELECT * from tasks')
  res.status(200).json({tasks})
})

app.post('/api/create-tasks', async (req,res)=>{
  const { title, description, status, priority, due_date } = req.body
  await db.query('INSERT INTO tasks(title, description, status, priority, due_date) VALUES($1,$2,$3,$4,$5)', [title, description, status, priority, due_date])
  res.status(200).json({message: 'Task created'})
})


app.listen(3000, () => {
  console.log("Server Listening to port 3000");
});
