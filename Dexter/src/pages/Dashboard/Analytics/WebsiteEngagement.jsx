import Metrics from "@/components/Common/Metrics";
import { engagementMetrics, engagementInsights } from "@/lib/data";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";

const WebsiteEngagement = ({ setShowDetails }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="relative w-1/2 p-4 mb-4 md:w-full lg:w-1/2 bg-white border rounded-lg h-fit max-md:w-full">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Website Engagement</p>
        <CiMenuKebab
          className="text-gray-700 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div className="flex justify-evenly max-md:gap-12 md:gap-2 mt-4 items-center    lg:flex-row max-md:flex-wrap p-4  rounded-lg bg-[#f5f7f9]">
        {engagementMetrics.map((metric, index) => (
          <div
            key={index}
            className="[&:not(:first-child)]:border-l border-l-[#d5d9e1] [&:not(:first-child)]:pl-4 max-md:[&:not(:first-child)]:border-none max-md:[&:not(:first-child)]:pl-0 md:[&:not(:first-child)]:pl-2 [&:not(:last-child)]:mr-3"
          >
            <Metrics
              metric={metric}
              className="relative left-4 text-[#98a8bf]   text-[13px] bottom-8"
              marginTop="mt-4"
              spanColor="text-[#7a8eac] text-[8px]"
            />
            <p className="text-[#9795fa] ml-10 text-[10px] md:text-[9px] -mt-1 font-semibold ">
              View {metric.toView}
            </p>
          </div>
        ))}
      </div>

      {/* Insights */}

      <div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-semibold">Insights</p>
          <IoIosArrowDown
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowInsights(!showInsights)}
          />
        </div>
      </div>
      {showInsights && (
        <div className="flex flex-col gap-3 mt-4">
          {engagementInsights.map((insight, index) => (
            <div
              key={index}
              className={`w-full flex justify-between items-center rounded-lg p-3 ${
                insight.type === "Warning"
                  ? "bg-[#fff5e5] text-[#714a10]]"
                  : insight.type === "Success"
                  ? "bg-[#edf7ed] text-[#29502b]"
                  : insight.type === "Info"
                  ? "bg-[#f0f0ff] text-[#587795]"
                  : "bg-[#feeceb] text-[#621b16]"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={` ${
                    insight.type === "Success"
                      ? "text-[#4caf50] text-[18px]"
                      : insight.type === "Warning"
                      ? "text-[#ff9800]  text-[18px]"
                      : insight.type === "Info"
                      ? "text-[#6e69fb] text-[18px]"
                      : "text-[#f44336] text-[21px]"
                  } `}
                >
                  {insight.icon}
                </span>
                <p>{insight.detail} </p>
              </div>
              <IoMdClose size={18} className="cursor-pointer" />
            </div>
          ))}
        </div>
      )}

      {showMenu && (
        <div
          onClick={() => {
            setShowMenu(false);
            setShowDetails("Website Engagement");
          }}
          className="absolute flex items-center gap-3 p-2 text-gray-500 bg-white rounded-lg shadow-lg cursor-pointer rounded-g -top-5 right-5 w-fit hover:bg-gray-100"
        >
          <span className="text-[14px] cursor-pointer">
            <BsBoxArrowLeft />
          </span>
          <span>Details</span>
        </div>
      )}
    </div>
  );
};

export default WebsiteEngagement;