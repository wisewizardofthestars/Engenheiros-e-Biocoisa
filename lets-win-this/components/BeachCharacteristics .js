import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeachCharacteristics = ({ characteristics }) => {
  return (
    <div className="flex justify-center">
      {characteristics.map((characteristic) => (
        <div key={characteristic.name} className="flex flex-col items-center mr-4 mb-2">
          <div className="rounded-full shadow-lg bg-custom-blue-green w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={characteristic.icon} style={{ color: "#FFFFFF" }} />
          </div>
          <span className="text-xs font-bold text-gray-600 mt-1" style={{ width: '80px', textAlign: 'center' }}>{characteristic.name}</span>
        </div>
      ))}
    </div>
  );
};



// const BeachCharacteristics = ({ characteristics }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {characteristics.map((characteristic) => (
//         <div key={characteristic.name} className="flex shadow-lg text-black font-bold items-center mr-4 mb-2 p-2 bg-gray-200 rounded-md">
//           <span className="text-xs text-gray-600">{characteristic.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };





export default BeachCharacteristics;
