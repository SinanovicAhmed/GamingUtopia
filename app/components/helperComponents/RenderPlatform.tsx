import { ParentPlatform } from "@/app/interfaces/Games";
import React from "react";
import { BsPlaystation } from "react-icons/bs";
import { BsXbox } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";

const RenderPlatform = ({ platforms }: { platforms: ParentPlatform[] }) => {
  const getPlatformIcon = (platformName: string) => {
    if (platformName.includes("PlayStation")) {
      return <BsPlaystation style={{ color: "white" }} />;
    } else if (platformName.includes("Xbox")) {
      return <BsXbox style={{ color: "white" }} />;
    } else if (platformName.includes("PC")) {
      return <FaComputer style={{ color: "white" }} />;
    } else if (platformName.includes("Nintendo")) {
      return <BsNintendoSwitch style={{ color: "white" }} />;
    } else if (platformName.includes("Linux")) {
      return <FaLinux style={{ color: "white" }} />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center gap-1">
      {platforms.map(
        (platform) =>
          getPlatformIcon(platform.platform.name) && (
            <span key={platform.platform.id}>{getPlatformIcon(platform.platform.name)}</span>
          )
      )}
    </div>
  );
};

export default RenderPlatform;
