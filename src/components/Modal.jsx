const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="details_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
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

          <button className="btn btn-primary mt-5">Submit Form</button>

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
