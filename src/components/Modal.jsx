import { setAppointment } from "../utils/localStorage";

const Modal = ({ treatment }) => {
  // console.log(treatment);
  const handleModalFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const date = e.target.date.value;
    // console.log(name, phone, address, date, email);
    const modalInfo = {
      treatment,
      name,
      email,
      phone,
      address,
      date,
    };
    // use localStorage utility function
    setAppointment(modalInfo);

    // ================= local storage in utils folder ==================
    // let saveData = [];
    // const localData = localStorage.getItem("appts");
    // if (localData) {
    //   saveData = JSON.parse(localData);
    // }
    // saveData.push(modalInfo);
    // localStorage.setItem("appts", JSON.stringify(saveData));
    // ==================================================================
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="details_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleModalFormSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Phone</label>
              <input
                name="phone"
                type="number"
                className="input"
                placeholder="Phone"
              />
              <label className="label">Address</label>
              <input
                name="address"
                type="text"
                className="input"
                placeholder="Address"
              />
              <label className="label">Date</label>
              <input
                name="date"
                type="date"
                className="input"
                placeholder="Date"
              />
            </fieldset>
            <button className="btn btn-primary mt-5">Submit Modal Form</button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
