import React from 'react'
import Carousel from '../components/Carousel';
import { NewCarousel } from '../components/NewCarousel';



export default function Home() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <div className='min-h-screen'>
      <Carousel slideimages={slides}/>{/*This is the old carousel*/}
      {/* <NewCarousel slides={slides}/> */}
    </div>
  )
}
