import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Table from './Table'
import axios from 'axios'

export default function TaskCreate() {

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
    due_date: ''
  })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <div
          className="row row-cols-1 rounded-3 p-3 gap-1 me-3 shadow"
          style={{ backgroundColor: "white" }}
        >
          <div className="col"><h2>Task</h2></div> <br></br>

          <form className="bg-primary-light row row-cols-auto align-items-center justify-content-between gap-3">
            <div class="col">
              <input
                type="text"
                alt=""
                placeholder="Title"
                className="p-2 rounded-3 border border-secondary"
              />
            </div>
            <div className="col">
              <select className="p-2 ps-2 pe-5 rounded-3 border border-secondary">
                <option>Task Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div class="col">
              {" "}
              <select className="p-2 ps-2 pe-5 rounded-3 border border border-secondary">
                <option>Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <DemoItem sx={{ maxWidth: '200px' }} className="p-2 rounded-3 border border-light-subtle">
              <DatePicker defaultValue={dayjs("2025-05-17")} />
            </DemoItem>

            <textarea className="w-100 p-2 rounded-3 border border border-secondary mx-2" placeholder="Description" style={{resize: 'none', height: '150px'}}></textarea>

            <button type="button" class="btn btn-primary px-5 w-100 mx-2">Add Task</button>
          </form>

        </div>
      </DemoContainer>

      <div className="my-3 me-3">
            <Table /> 
        </div>
    </LocalizationProvider>
  );
}
