import { useLoaderData } from "react-router-dom";

const ServiceCardDetails = () => {
  const singleData = useLoaderData();
  // console.log(singleData);
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${singleData?.image})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{singleData?.treatment}</h1>
            <h1 className="mb-5 text-xl font-medium">
              Cost : {singleData?.cost} $
            </h1>
            <p className="mb-5 text-justify">{singleData?.description}</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
