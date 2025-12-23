import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Service from "../components/Service";

const Home = () => {
  const serviceData = useLoaderData();
  // console.log(serviceData);
  return (
    <div>
      <div className="mb-8">
        <Banner></Banner>
      </div>
      <div className="mb-8">
        <Service serviceData={serviceData}></Service>
      </div>
    </div>
  );
};

export default Home;
