import { useContext, useEffect } from "react";
import HomeBanner from "../Components/HomeBanner";
import { AppContext } from "../Context";
import Services from "./Services";
import Contact from './Contact';
import About from './About';

const Home = () => {
  // const data={
  //   name:"ADITYA TRIVEDI",
  //   image:"./images/homebanner.webp",
  // }

  const { updateHomepage } = useContext(AppContext);

  useEffect(() => {
    updateHomepage();
  }, []);
  return (
    <div>
      <HomeBanner

      // {...data}
      />
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
