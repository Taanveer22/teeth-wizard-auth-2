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
