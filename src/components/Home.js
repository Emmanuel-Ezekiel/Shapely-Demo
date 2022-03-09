import React from 'react'
import Img from '../assets/macbook-preview-flexible.webp.png'
import Img2 from '../assets/flexible-portfolio.webp.png'
import Img3 from '../assets/photo-1440557653082-e8e186733eeb-1.jpeg'

const Home = () => {

  
  return (
    <>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-home-pattern bg-no-repeat bg-center  bg-cover bg-auto max-h-screen md:max-h-screen h-screen'>
          <article className="h-full flex items-center flex-col justify-center ">
            <p className="text-white text-4xl font-light text-center mb-6 md:text-6xl">We Change Everything Wordpress</p>
            <p className="text-white text-xs font-light text-center mb-6 md:text-6xl">This is the only wordpress theme you will ever want to use</p>
            <div className="flex flex-col md:flex md:flex-row">
              <button className="bg-purple-600 text-white-200 p-1 h-10 w-40 mt-6 text-white text-sm">Read More</button>
              <button className="border-2 border-white-400 p-1 h-10 w-40 mt-6 text-white text-sm md:ml-4">Download Now</button>
            </div>
          </article>
        </div>
      </section>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-white ma-h-screen h-screen p-5'>
          <article className='h-full flex flex-col justify-center items-center'>
            <img src={Img} alt="macbook" className='mb-5' />
            <div>
              <h3 className='text-xl font-normal mb-5'>SEO Friendly</h3>
              <div className='mb-2 text-xs leading-6 font-normal'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies. mew</p>
              </div>
              <button className='bg-purple-600 text-white-200 p-1 h-10 w-40 mt-6 text-white text-sm'> Read More</button>
            </div>
          </article>
        </div>
      </section>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-gray-100 ma-h-screen h-screen p-5'>
          <article className='h-full flex flex-col justify-center items-center'>
            <div>
              <h3 className='text-xl font-normal mb-5'>Porfolio Section</h3>
              <div className='mb-2 text-xs leading-6 font-normal'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies. mew</p>
              </div>
              <button className='bg-purple-600 text-white-200 p-2 h-10 w-40 mt-6 text-white text-sm'> SEE IT IN ACTION</button>
            </div>
            <img src={Img2} alt="macbook" className='mt-7' />
          </article>
        </div>
      </section>
      <section className='min-h-full md:max-w-full mx-auto max-w-6x'>
        <div className=' bg-section-pattern bg-no-repeat bg-center  bg-cover bg-auto  ma-h-screen h-96 p-5'>
          <article className='h-full flex flex-col justify-center items-center'>
            <div>
              <h1 className='text-3xl text-white leading-10 font-light mb-6 text-center'>Small Parallex Section</h1>
              <div >
                <p className='mb-6 text-xs font-normal break-words leading-7 text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies. mew</p>
              </div>
              <button className='bg-purple-600 text-white-200 p-4 h-16 w-40 mt-6 text-white text-sm ml-20 '> MORE INFO </button>
            </div>
          </article>
        </div>
      </section>
      <section className='min-h-full md:max-w-full mx-auto max-w-6x'>
        <div className='bg-gray-100 ma-h-screen h-96 p-5'>
          <article className='h-full flex flex-col justify-center items-center'>
            <div>
              <h3 className='text-xl font-normal mb-5 text-center'>Limitless Options</h3>
              <div className='mb-2 text-xs leading-6 font-normal'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies. mew</p>
              </div>
              <button className='bg-purple-600 text-white-200 p-2 h-10 w-40 mt-6 text-white text-sm ml-20'>DOWNLOAD NOW</button>
            </div>
          </article>
        </div>
      </section>
      <section className='min-h-full md:max-w-full mx-auto max-w-6x'>
        <div className='bg-white-100 ma-h-screen h-96 p-5'>
          <article className='h-full flex flex-col justify-center items-center'>
          <img src={Img3} alt="macbook" className='h-screen w-screen' />
          </article>
        </div>
      </section>
    </>
  )
}

export default Home