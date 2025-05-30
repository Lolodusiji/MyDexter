import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { authApi } from "@/lib/config/axios-instance"; // Adjust the import based on your project structure
import { toast } from "sonner";

const Personalization = () => {
  const [isOn, setIsOn] = useState(true);
  const [loading, setLoading] = useState(false);

  const customToggle = async (enabled: boolean) => {
    setLoading(true);
    try {
      const response = await authApi.put(
        `/settings/user/custom-instructions/toggle`,
        {
          enabled: enabled,
        }
      );

      if (response.data.success) {
        toast.success(
          `Custom instructions ${
            enabled ? "enabled" : "disabled"
          } successfully!`
        );
        setIsOn(enabled); // Update the state based on the toggle
      } else {
        toast.error("Failed to update custom instructions.");
      }
    } catch (error: any) {
      // Log specific error details to avoid circular structure issues
      console.error("Error details:", error.message || error);
      toast.error("Error updating custom instructions.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    const newState = !isOn;
    customToggle(newState); // Call the API with the new state
  };

  return (
    <div className="bg-white shadow-md mt-4 mb-8 max-md:mt-24 rounded-lg p-6">
      <div className="flex justify-between p-4">
        <span>Custom instructions</span>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleToggle}
        >
          <span>{isOn ? "On" : "Off"}</span>
          <HiOutlineChevronRight className="mb-1" />
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-4">
        <span>Memory</span>
        <div
          className={`w-9 h-5 rounded-full cursor-pointer relative ${
            isOn ? "bg-primary" : "bg-gray-300"
          } p-1 transition-colors duration-300`}
          onClick={handleToggle} // Call handleToggle on click
        >
          <div
            className={`w-[0.9rem] h-[0.9rem] rounded-full bg-white absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
              isOn ? "translate-x-4" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
      <hr />

      <div className="p-4">
        <div className="max-md:flex-col mb-4">
          <p className="text-[#95959c] md:w-[80%] max-md:w-[70%]">
            Mydexter will become more helpful as you chat, picking up on details
            and preferences to tailor its responses to you.
            <span className="text-[#437ed3] underline cursor-pointer ml-1">
              Learn more
            </span>
          </p>
        </div>
        <div>
          <p className="text-[#95959c]">
            To understand what Mydexter remembers or teach it something new,
            just chat with it:
          </p>
          <ul className="text-[#95959c] list-disc px-6 mt-1 space-y-1">
            <li>“Remember that I like concise responses.”</li>
            <li>“I just got a puppy!”</li>
            <li>“What do you remember about me?”</li>
            <li>“Where did we leave off on my last project?”</li>
          </ul>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-8">
        <button className="border border-[#908dfc] rounded-lg p-2 text-[#908dfc] w-[90px] hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300">
          Manage
        </button>
        <button className="bg-[#d92d20] whitespace-nowrap hover:bg-opacity-50 transition-all duration-300 text-white p-2 w-[30%] rounded-lg">
          Clear Mydexter memory
        </button>
      </div>
    </div>
  );
};

export default Personalization;
