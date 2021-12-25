import React from "react";
import DriverCard from "./DriverCard";

function DriverList({ drivers }) {
  if (drivers.length === 0) {
    return <div className="text-slate-800 p-6 font-bold text-center mt-5">No drivers found</div>;
  }

  return (
    <div data-testid="driver-list" className="md:overflow-x-auto md:whitespace-nowrap w-full">
      {drivers.map((driver) => (
        <DriverCard
          driver={driver}
          key={`${driver.name.first}_${driver.name.last}_${driver.dob.date}`}
        />
      ))}
    </div>
  );
}

export default React.memo(DriverList);
