import React from 'react'

const Footer = () => {
  return (
    <footer className='min-h-full md:max-w-full mx-auto max-w-6x'>
        <div className='bg-black ma-h-screen h-3/12 p-5'>
          <article className='h-36 flex flex-col justify-center items-center'>
            <div>
              <div className='mb-2 text-xs text-white leading-6 font-normal'>
                <p> Theme by Colorlib Powered by WordPress</p>
              </div>
            </div>
          </article>
        </div>
      </footer>
  )
}

export default Footer