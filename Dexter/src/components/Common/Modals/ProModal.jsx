import React, { useState } from "react";
import ProLogo from "../../../assets/proLogo.svg";
import { RiCloseLine } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { popupVariant } from "../../../lib/utils";
import CheckoutModal from "./CheckoutModal";

const variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const freePlanFeatures = [
  "Up to 10 searches per day",
  "All SEO information",
  "All MyDexter chatbot features",
  "1-click automated blog post demo",
];

const proPlanFeatures = [
  "Up to 100 searches per day",
  "All SEO information",
  "All MyDexter chatbot features",
  "SEO Metric Analytics Overview",
  "1-click blog posting",
  "Bulk blog posting",
];

const ProModal = ({ onClose }) => {
  const [openCheckout, setOpenCheckout] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const OpenCheckoutHandler = () => {
    setOpenCheckout(true);
  };

  return (
    <motion.div
      {...variant}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        {...popupVariant}
        className={`bg-white rounded-lg shadow-lg w-[90%] max-w-3xl ${openCheckout ? "hidden" : ""}`}
      >
        {/* Close Button */}
        <div className="flex justify-end py-3 text-[#98A2B3] px-4">
          <button onClick={onClose}>
            <RiCloseLine size={22} />
          </button>
        </div>

        {/* Header Section */}
        <div className="px-6 flex justify-center items-center">
          <div className="flex items-center w-[12rem] space-x-2">
            <img src={ProLogo} alt="Pro Logo" />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Sign Up to Pro for Smarter SEO and Faster Results
          </h3>
          <p className="text-gray-600 mb-6">
            Upgrade to MyDexter Pro for advanced SEO tools that automate tasks,
            deliver insights, and optimize your site. Save time, boost
            visibility, and grow your business with ease.
          </p>

          {/* Plans Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6 px-6 py-4">
            {/* Free Plan */}
            <div className="border rounded-lg p-4 flex-1 flex flex-col">
              <div className="flex items-center bg-layer px-4 py-3 border rounded-lg justify-between">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold text-primary">Free</h3>
                  <p className="text-gray-600 font-normal text-sm">Forever</p>
                </div>
              </div>
              <p className="text-[#7A8EAC] text-start text-sm my-4">
                What is included?
              </p>
              <ul className="text-left space-y-2 mb-6 flex-grow">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <PiStarFourFill className="text-[#475467]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-2 border text-[#475467] rounded-lg font-semibold hover:bg-[#475467]">
                Continue with Email
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border rounded-lg p-4 flex-1 flex flex-col">
              <div className="flex items-center bg-layer px-4 py-3 border rounded-lg justify-between">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-semibold text-primary">
                    Professional
                  </h3>
                  <p className="text-gray-600 font-normal text-sm">
                    Start Free – No Card Needed
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="flex flex-col items-end">
                  <p className="text-2xl font-semibold text-gray-900">$29</p>
                  <p className="text-gray-600 text-sm">/month</p>
                </div>
              </div>
              <p className="text-[#7A8EAC] text-start text-sm my-4">
                What is included?
              </p>
              <ul className="text-left space-y-2 mb-6 flex-grow">
                {proPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <PiStarFourFill className="text-[#475467]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary"
                onClick={OpenCheckoutHandler}
              >
                Try Pro Free for 7 Days
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Conditionally render CheckoutModal */}
      {openCheckout && <CheckoutModal onClose={() => (setOpenCheckout(false), onClose())} />}
    </motion.div>
  );
};

export default ProModal;