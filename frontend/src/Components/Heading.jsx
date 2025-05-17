import React , { useEffect, useState } from "react";
import axios from "axios";

export default function Heading() {

    const [project, setProject] = useState('')
    const [projectName, setProjectName] = useState([])
    const [refectchData, setrefetchData] = useState(false)

    useEffect(()=>{
      async function getProjects() {
        try {
          const result = await axios.post('http://localhost:3000/api/all-project',{
          withCredentials: true
        }) 

        if(result.status == 200){
          setProjectName(result.data.project)
        } 
        } catch (error) {
          console.log(error)
        }
      }

    },[refectchData])
  
    async function CreateProject() {
      try {
      const result = await axios.post('http://localhost:3000/api/create-project',{
        project_name: project
      },{
        withCredentials: true
      }) 

      setrefetchData(!refectchData)

      } catch (error) {
        console.log(error)
      }

    }

    async function DeleteProject() {
      try {
      const result = await axios.delete('http://localhost:3000/api/delete-project',{
        project_name: project
      },{
        withCredentials: true
      }) 

      setrefetchData(!refectchData)

      } catch (error) {
        console.log(error)
      }

    }

    function ProjectName(e){
      setProject(e.target.value)
    }

  return (
    <div className="d-flex justify-content-between p-3">
      <div>
        <h1>Project: </h1>
        <select className="p-1 px-1 pe-5">
          {projectName.map((d)=>{
            console.log(d)
           return <option>{d}</option>
          })}
          
        </select>
      </div>

      <div className="">
        <input type="text" placeholder="New Project Name" className=" rounded-3 border-2 p-2" onChange={ProjectName}/>
        <button type="button" className="btn btn-success mx-3" onClick={CreateProject}>New project</button>
        <button type="button" className="btn btn-danger">Delete Project</button>
      </div>
    </div>
  );
}
