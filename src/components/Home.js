import React from 'react'

const Home = () => {
  return (
    <>
      <section className='border-4 border-black-400 min-h-screen md:max-w-full mx-auto max-w-6x'>
        <div className='bg-home-pattern bg-no-repeat bg-center  bg-cover bg-auto max-h-screen md:max-h-screen h-screen'>
          <article className="h-full flex items-center flex-col justify-center ">
            <p className="text-blue-300 text-4xl font-light">We Change Everything Wordpress</p>
            <p>This is the only wordpress theme you will ever want to use</p>
            <div>
              <button>Read More</button>
              <button>Download Now</button>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home