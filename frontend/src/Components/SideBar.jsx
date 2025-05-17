import React from "react";
import { Link } from 'react-router-dom'

export default function SideBar({ height }) {
  console.log(height)
  return (
    <div style={{height}}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100"
        style={{width: '280px'}}
      >
        {" "}
        <Link
          to="/Home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {" "}
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
          </svg>{" "}
          <span className="fs-4">Task Manager</span>{" "}
        </Link>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <Link to="/Home" className="nav-link active" aria-current="page">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >

              </svg>
              Home
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to='/projects' className="nav-link text-white">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >

              </svg>
              Projects
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link text-white">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >

              </svg>
              Tasks
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#" className="nav-link text-white">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >

              </svg>
              Logout
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        </div>{" "}
      </div>
  );
}
