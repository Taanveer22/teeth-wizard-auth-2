import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Treatments = () => {
  const serviceData = useLoaderData();
  // console.log(serviceData);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {serviceData.map((serviceItem) => (
        <ServiceCard
          key={serviceItem.id}
          serviceItem={serviceItem}
        ></ServiceCard>
      ))}
    </div>
  );
};

export default Treatments;
