import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Service from "../components/Service";
import Feedback from "../components/Feedback";

const Home = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  const { data, data2 } = loaderData;
  // console.log(data);
  // console.log(data2);

  return (
    <div>
      <div className="mb-8">
        <Banner></Banner>
      </div>
      <div className="mb-8">
        <Service data={data}></Service>
      </div>
      <div className="">
        <Feedback data2={data2}></Feedback>
      </div>
    </div>
  );
};

export default Home;
