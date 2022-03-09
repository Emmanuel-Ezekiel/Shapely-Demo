import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import {  FaLinkedinIn } from 'react-icons/fa';
import {  FaTwitter } from 'react-icons/fa';
import {  FaFacebookF } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';


const Footer = () => {
  return (
    <footer className='min-h-full md:max-w-full mx-auto max-w-6x'>
        <div className='bg-black ma-h-screen h-3/12 p-5'>
          <article className='h-36 flex flex-col justify-center items-center'>
            <div>
              <div className='mb-2 text-xs text-white leading-6 font-normal'>
                <p> Theme by Colorlib Powered by WordPress</p>
              </div>
              <div className='mb-2 text-xl text-white leading-6 font-normal flex justify-content float-right'>
                <a className='ml-2' href="www.instagram.com"> <AiOutlineInstagram /> </a> 
                <a className='ml-2' href="www.youtube.com"><TiSocialYoutubeCircular /></a> 
                <a className='ml-2' href="www.linkedin.com"><FaLinkedinIn/></a> 
                <a className='ml-2' href="www.twitter.com"><FaTwitter/></a> 
                <a className='ml-2' href="www.facebook.com"><FaFacebookF/></a> 
              </div>
            </div>
          </article>
        </div>
           <BackToTopButton />
      </footer>
  )
}

export default Footer