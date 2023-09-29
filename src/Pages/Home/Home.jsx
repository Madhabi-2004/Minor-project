import React from 'react'
import "../Home/home.css"
// import CommonSelect from '../../Components/CommonSelect/CommonSelect'`
import BannerComponent from '../../Components/BannerComponent/BannerComponent'
import Brand from '../../Components/Brand/Brand';
import Card from '../../Components/Card/Card';
import Img from '../../asset/background.jpg'
export default function Home() {
  const slides = [
    {
      image: Img,
      title: 'Slide 1 Title',
      description: 'Slide 1 Description',
    },
    {
      image: Img,
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    },
    {
      image: Img,
      title: 'Slide 3 Title',
      description: 'Slide 3 Description',
    },
    // Add more slides as needed
  ];  return (
    <div>
    <BannerComponent slides={slides}/>
    <Brand/>
    <Card/>
    </div>
  );
}