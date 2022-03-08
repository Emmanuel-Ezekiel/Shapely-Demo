import React from 'react'
import Img from '../assets/macbook-preview-flexible.webp.png'

const Home = () => {
  return (
    <>
      <section className='min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-home-pattern bg-no-repeat bg-center  bg-cover bg-auto max-h-screen md:max-h-screen h-screen'>
          <article className="h-full flex items-center flex-col justify-center ">
            <p className="text-white text-4xl font-light text-center mb-6 md:text-6xl">We Change Everything Wordpress</p>
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
            <img src={Img} alt="macbook" className='mt-7' />
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
            <img src={Img} alt="macbook" className='mt-7' />
          </article>
        </div>
      </section>
    </>
  )
}

export default Home