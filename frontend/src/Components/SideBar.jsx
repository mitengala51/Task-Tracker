import React from "react";

export default function SideBar() {
  return (
    <div style={{height: '100vh'}}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100"
        style={{width: '280px'}}
      >
        {" "}
        <a
          href="/"
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
        </a>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <a href="#" className="nav-link active" aria-current="page">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >

              </svg>
              Home
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
              Projects
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
