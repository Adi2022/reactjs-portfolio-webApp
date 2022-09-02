import React,{useContext,useEffect} from 'react'
import HomeBanner from '../Components/HomeBanner';
import { AppContext } from '../Context';

const About = () => {

  const {updateAboutPage}=useContext(AppContext)

  useEffect(()=>{
    updateAboutPage();
  },[])
  // const data={
  //   name:"Frontend Developer",
  //   image:"./images/aboutBanner.webp",
  // }
  
  return (
    <div>
      <HomeBanner 
      
      // {...data}
      />
    </div>
  )
}

export default About;