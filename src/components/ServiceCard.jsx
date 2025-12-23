import { Link } from "react-router-dom";

const ServiceCard = ({ serviceItem }) => {
  return (
    <div>
    
      <div className="card h-96 bg-base-200 shadow-sm">
        <figure>
          <img src={serviceItem?.image} className="h-36 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {serviceItem?.treatment}
            <div className="badge badge-secondary">${serviceItem?.cost}</div>
          </h2>
          <p className="text-sm text-justify">
            {serviceItem?.description.slice(0, 100)}...
          </p>
          <div className="card-actions justify-center">
            <Link  className="btn btn-primary">Checkout More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
