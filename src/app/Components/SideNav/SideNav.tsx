import React from "react";
import Button from "../Button/Button";

const SideNav: React.FC = () => {
  return (
    <>
      <div className="w-[94vw] absolute lg:hidden md:hidden">
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 hover:bg-blue-700 dark:hover-text-white md:dark:hover-bg-transparent"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 hover-bg-blue-700 dark:hover-text-white md:dark-hover-bg-transparent"
              >
                Software Services
              </a>
            </li>
            <Button />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
