const SingleAppointment = ({ apptElement }) => {
  // console.log(apptElement);
  return (
    <div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{apptElement?.treatment}</h2>
          <h2>{apptElement?.date}</h2>
          <h2>{apptElement?.serial}</h2>
          <p>{apptElement?.name}</p>
          <p>{apptElement?.email}</p>
          <p>{apptElement?.address}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Cancel Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
