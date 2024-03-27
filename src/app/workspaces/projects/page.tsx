import React from "react";
import DashboardHeader from "../_components/workspace-header";
import { BaggageClaim } from "lucide-react";
import ProjectCard from "../_components/projectCard";

const WorkSpaceProjects = () => {
  return (
    <div className="h-full">
      <DashboardHeader icon={BaggageClaim} title="Projects" />
      <div className="pt-4 pl-4 pb-8 h-full flex flex-wrap pb-8 overflow-y-auto">
        <ProjectCard />
      </div>
    </div>
  );
};

export default WorkSpaceProjects;
