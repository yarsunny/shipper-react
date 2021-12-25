import React from "react";
import DriverCard from "./DriverCard";

export function DriverList({ drivers }) {
  return (
    <>
      {drivers.map((driver) => (
        <div
          key={`${driver.name.first}_${driver.name.last}_${driver.dob.date}`}
        >
          <DriverCard driver={driver} />
        </div>
      ))}
    </>
  );
}

export default React.memo(DriverList);
