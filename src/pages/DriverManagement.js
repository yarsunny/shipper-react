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

  return (
    <>
      <div>
        <div>
          <h2>Driver Management</h2>
          <div>Data driver yang bekerja dengen Anda.</div>
        </div>
        <div>
          <Search queryChanged={queryChanged} />
        </div>
        <div>
          <button type="button">Tambah Driver &#43;</button>
        </div>
      </div>
      <div>
        <DriverList drivers={driverData?.pageDrivers} />
      </div>
      <div>
        <button
          type="button"
          disabled={driverData.currentPage <= 0}
          onClick={() => {
            dispatch(previous());
          }}
        >
          &#60; Previous Page
        </button>
        <button
          type="button"
          disabled={driverData.currentPage >= driverData.totalPages - 1}
          onClick={() => {
            dispatch(next());
          }}
        >
          Next Page &#62;
        </button>
        {driverData.currentPage}
      </div>
    </>
  );
}
