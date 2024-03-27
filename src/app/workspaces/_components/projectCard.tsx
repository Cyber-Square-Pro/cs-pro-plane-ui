import React from "react";

const ProjectCard = () => {
  return (
    <div className="m-1">
      <div className="border-2 w-80">
        <div className="h-36">
          <img
            src="https://i.pinimg.com/originals/13/d0/90/13d0903cbcd0e0205c5fe0a3546f59fd.jpg"
            className=" h-full w-full"
            alt="..."
          />
          <span className="relative bottom-20 left-12 text-white font-bold">
            The Real Hero
          </span>
          <span className="relative bottom-14 right-12 text-white font-semibold">
            THERE
          </span>
        </div>

        <div className="flex flex-row h-32">
          <div className="w-3/6"></div>
          <div className="w-3/6 ">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-edit-1235-1175529.png?f=webp&w=256"
              alt=""
              className="relative top-20 left-28 w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
