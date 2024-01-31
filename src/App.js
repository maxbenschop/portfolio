import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <div className="App">
      <div className="w-full flex justify-center p-12 pb-0 relative">
        <div
          className={`w-full min-h-screen bg-white flex flex-col rounded-t-2xl overflow-hidden ${
            isMenuOpen ? "top-right-open" : ""
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">M</h1>
            <div>
              <button
                onClick={toggleMenu}
                className="focus:outline-none text-gray-800"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6 ease-in-out duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="ease-in-out duration-200 h-6 w-6"
                    width="45"
                    height="28"
                    viewBox="0 0 45 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H43"
                      stroke="black"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 14L43 14"
                      stroke="black"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 26H43"
                      stroke="black"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="flex top-full p-4 rounded-b-2xl shadow-md justify-end text-end pr-5">
              <ul className="flex flex-col space-y-4 text-gray-800">
                <li className="cursor-pointer">Works</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
