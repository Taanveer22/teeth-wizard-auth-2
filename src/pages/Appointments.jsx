import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {
  getAppointmentsByEmail,
  removeAppointment,
} from "../utils/localStorage";
import SingleAppointment from "./SingleAppointment";

const Appointments = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [localSavedData, setLocalSavedData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const userData = getAppointmentsByEmail(user.email);
      // console.log(userData);
      setLocalSavedData(userData);
    } else {
      setLocalSavedData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleCancelAppointment = (serial) => {
    removeAppointment(serial);

    // remove from UI (state)
    setLocalSavedData((prev) =>
      prev.filter((element) => element.serial !== serial)
    );
  };

  // ============================================================
  // ======= alternative but not recommended ======================
  // // declare the variable first
  // let localSavedData;
  // if (user && user?.email) {
  //   // If user exists AND has an email
  //   const userData = getAppointmentsByEmail(user.email);
  //   if (userData === null || userData === undefined) {
  //     // If the function returned nothing, use an empty array
  //     localSavedData = [];
  //   } else {
  //     // Otherwise, use the data returned
  //     localSavedData = userData;
  //   }
  // } else {
  //   // If there is no user or no email, also use an empty array
  //   localSavedData = [];
  // }

  // ========================================================
  // ======= problematic solution ======================
  //  useEffect(() => {
  //   let saveData = [];
  //   const localData = localStorage.getItem("appts");
  //   if (localData) {
  //     saveData = JSON.parse(localData);
  //   }
  //   const userData = saveData.filter((item) => item.email === user?.email);
  //   console.log(userData);
  //   setLocalSavedData(userData);
  // }, []);
  // console.log(localSavedData);
  // ======================================================

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-4">
        Total Booked Appointments :{localSavedData.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {localSavedData.length > 0 ? (
          localSavedData.map((apptElement) => (
            <SingleAppointment
              key={apptElement.serial}
              apptElement={apptElement}
              onRemove={handleCancelAppointment}
            ></SingleAppointment>
          ))
        ) : (
          <p className="text-3xl font-bold text-yellow-500 text-center">
            No Appointments Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
