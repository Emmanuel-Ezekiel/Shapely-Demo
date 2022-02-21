import React from 'react'
import Img from '../assets/macbook-preview-flexible.webp.png'

const Home = () => {
  return (
    <>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-home-pattern bg-no-repeat bg-center  bg-cover bg-auto max-h-screen md:max-h-screen h-screen'>
          <article className="h-full flex items-center flex-col justify-center ">
            <p className="text-white text-4xl font-light text-center mb-6 md:text-6xl">We Change Everything Wordpress</p>
            <p classsName="text-slate-50 text-sm leading-normal md:text-red-500">This is the only wordpress theme you will ever want to use</p>
            <div className="flex flex-col md:flex md:flex-row">
              <button className="bg-purple-600 text-white-200 p-1 h-10 w-40 mt-6 text-white text-sm">Read More</button>
              <button className="border-2 border-white-400 p-1 h-10 w-40 mt-6 text-white text-sm md:ml-4">Download Now</button>
            </div>
          </article>
        </div>
      </section>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-white ma-h-screen h-screen'>
          <article className='h-full flex flex-col justify-center items-center'>
            <img src={Img} alt="" className='' />
            <div>
              <h3 className='text-sm '>SEO Friendly</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
              </div>
              <button className='bg-purple-600 text-white-200 p-1 h-10 w-40 mt-6 text-white text-sm'> Read More</button>
            </div>
          </article>

        </div>

      </section>
    </>
  )
}

export default Home