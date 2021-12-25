import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import driverReducer, {
  loadDrivers,
  selectDriversData,
  search,
  next,
  previous,
} from "../features/driver/driverSlice";
import DriverList from "../features/driver/driverList";
import Search from "../common/Search";
import Button from "../common/Button";

// Inject Reducer Dynamically;
store.injectReducer("driver", driverReducer);

export default function DriverManagement() {
  const dispatch = useDispatch();
  const driverData = useSelector(selectDriversData);
  const queryChanged = useCallback(
    (query) => {
      dispatch(search(query));
    },
    [dispatch]
  );

  // Component Init
  useEffect(() => {
    dispatch(loadDrivers());
  }, [dispatch]);

  if (["loading", "init"].includes(driverData?.status)) {
    return <>loading</>;
  }

  function driverManagementHeader() {
    return (
      <div className="bg-white py-4 px-6 md:flex justify-between">
        <div>
          <div className="text-xl md:text-2xl font-bold uppercase text-orange-600">
            Driver Management
          </div>
          <div className="text-xs md:text-sm text-slate-600">
            Data driver yang bekerja dengen Anda.
          </div>
        </div>
        <div className="flex md:inline-flex items-center">
          <Search queryChanged={queryChanged} />
          <Button>Tambah Driver &#43;</Button>
        </div>
      </div>
    );
  }

  function driverListPagination() {
    return (
      <div className="flex justify-center items-center">
        <Button
          plain
          className="mr-4 md:mr-16"
          disabled={driverData.currentPage <= 0}
          onClick={() => {
            dispatch(previous());
          }}
        >
          &#60; &nbsp; Previous Page
        </Button>
        <Button
          plain
          disabled={driverData.currentPage >= driverData.totalPages - 1}
          onClick={() => {
            dispatch(next());
          }}
        >
          Next Page &nbsp; &#62;
        </Button>
      </div>
    );
  }

  return (
    <>
      {driverManagementHeader()}
      <DriverList drivers={driverData?.pageDrivers} />
      {driverListPagination()}
    </>
  );
}
