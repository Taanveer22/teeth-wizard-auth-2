import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = ({ serviceData }) => {
  console.log(serviceData);
  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-4">Service</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-4">
        {serviceData.slice(0, 4).map((serviceItem) => (
          <ServiceCard
            key={serviceItem.id}
            serviceItem={serviceItem}
          ></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/treatments" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Service;
