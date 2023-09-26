import React from 'react'
import "../Home/home.css"
import CommonSelect from '../../Components/CommonSelect/CommonSelect'
import BannerComponent from '../../Components/BannerComponent/BannerComponent'
import Brand from '../../Components/Brand/Brand';

export default function Home() {

  return (
    <div>
    <BannerComponent/>
    <Brand/>
    </div>
  );
}
