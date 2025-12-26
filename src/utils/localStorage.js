// storage key
const STORAGE_KEY = "appts";

// get all appointments from localStorage
export const getAppointments = () => {
  let saveData = [];
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    saveData = JSON.parse(localData);
  }
  return saveData;
};

// set a new appointment to localStorage
export const setAppointment = (modalInfo) => {
  let saveData = getAppointments();
  saveData.push(modalInfo);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
};

// get appointsments by email
export const getAppointmentsByEmail = (email) => {
  let saveData = getAppointments();
  return saveData.filter((item) => item.email === email);
};

// remove a appointment form local storage
export const removeAppointment = (serial) => {
  let saveData = getAppointments();
  // filter out the appointment that matches the given serial
  const filteredData = saveData.filter((item) => item.serial !== serial);
  // save the new array back to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredData));
};
