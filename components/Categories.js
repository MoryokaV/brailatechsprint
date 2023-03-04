import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { fa } from '@fortawesome/free-brands-svg-icons';

const Categories = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-sol-dark-blue rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faMobileAlt} className="text-white fa-lg" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Mobile Development</h2>
      </div>
      <div className="bg-sol-dark-blue rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="rounded-full bg-green-500 w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faCode} className="text-white fa-lg" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Web Development</h2>
      </div>
      <div className="bg-sol-dark-blue rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="rounded-full bg-purple-500 w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faCodeBranch} className="text-white fa-lg" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Embed Development</h2>
      </div>
    </div>
  );
};

export default Categories;