import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Projectcard = ({ project }) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white w-full p-1 border flex flex-col gap-3">
      <div className="">
    
      <div className="flex gap-[40px] mt-[5px]">
      <p className="font-barlow">Author(s):</p>
      <p>
            {" "}
            <b>{project.author}</b>
          </p>
      </div>
      <div className="flex gap-[48px] mt-[5px]">
      <p className="font-barlow ">Session:</p>
      <p>
            {" "}
            <b>{project.year}</b>
          </p>
      </div>
      <div className="flex gap-[75px] mt-[5px]">
      <p className="font-barlow ">Title:</p>
      <p>
            {" "}
            <b>{project.title}</b>
          </p>
      </div>
      <div className="flex gap-[21px] mt-[5px]">
      <p className="font-barlow ">Programme:</p>
      <p>
            {" "}
            <b>{project.course}</b>
          </p>
      </div>
      <div className="flex gap-[29px] mt-[5px]">
      <p className="font-barlow ">Supervisor:</p>
      <p>
            {" "}
            <b>{project.supervisor}</b>
          </p>
      </div>
      </div>
      {/* <p>Author: <b>{project.author} </b></p>
      <p>Year: <b>{project.year}</b></p>
      <p>Title: <b>{project.title}</b></p>
  <p>Course: <b>{project.course}</b></p> */}
      {show && (
        <div>
          <p className="text-sm mt-4">{project.abstract}</p>
          <p>
            Keywords: <b> {project.keywords}</b>
          </p>
        </div>
      )}
      <div className="flex justify-center gap-4 ml-[95px]">
        <a
          className="italic text-center  border bg-blue-300 text-black rounded-md p-2"
          href={project.filename}
        >
          View Pdf
        </a>
        <button
          onClick={showHandler}
          className="p-2 border rounded-md bg-blue-300 text-black"
        >
          {show ? <Icon icon="solar:minimize-bold" /> : <Icon icon="solar:maximize-bold" />}
        </button>
        <a
          className="italic text-center  bg-blue-300 text-black border rounded-md p-2"
          href="/project"
        >
          link to project
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
