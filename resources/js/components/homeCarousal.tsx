import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { Link } from '@inertiajs/react';


export default function HomeCarousal() {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      // Previous button
      `<div class="lg:flex items-center hidden absolute right-[80px] bottom-[-69px] opacity-80 hover:opacity-100">
         <div class="text-white font-bold uppercase cursor-pointer">
           <div class="text-sm">Prev</div>
            <div class="text-xs">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
            </div>
         </div>
       </div>`,
      
      // Next button
      `<div class="lg:flex items-center absolute hidden right-[150px] bottom-[-70px] opacity-80 hover:opacity-100">
         <div class="text-white font-bold uppercase cursor-pointer">
           <div class="text-sm">NEXT</div>
           <div class="text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
         </div>
       </div>`
    ],
  };  

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="flex justify-between items-center mt-[100px] px-17">
          <div className='w-full lg:w-[35%]'>
              <h1 className='font-bold text-6xl'>Mike New <br/>Collection!</h1>
              <p className='mt-11 text-neutral-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos rerum vitae tenetur dolore tempora laboriosam similique deserunt autem corrupti magni accusantium</p>
              <div className='flex  mt-5 items-center'>
                <Link href='/shop' className='h-13 w-13 bg-amber-500 flex justify-center items-center rounded-full text-white shadow-[0_10px_20px_rgba(255,108,0,0.2)] bg-linear-90 bg-linear-gradient-to-r from-[#ffba00] from-0% to-[#ff6c00] to-100%'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </Link>
                <p className='font-bold text-md ml-3'>SHOP NOW</p> 
              </div>
          </div>
          <div className='w-[60%] px-5 hidden lg:block'>
            <img src="/images/banner-img.png" alt="Image 1" />
          </div>
      </div>
      <div className="flex justify-between items-center mt-[100px] px-17">
          <div className='w-full lg:w-[35%]'>
              <h1 className='font-bold text-6xl'>Mike New <br/>Collection!</h1>
              <p className='mt-11 text-neutral-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos rerum vitae tenetur dolore tempora laboriosam similique deserunt autem corrupti magni accusantium</p>
              <div className='flex  mt-5 items-center'>
                <Link href='/shop' className='h-13 w-13 bg-amber-500 flex justify-center items-center rounded-full text-white shadow-[0_10px_20px_rgba(255,108,0,0.2)] bg-linear-90 bg-linear-gradient-to-r from-[#ffba00] from-0% to-[#ff6c00] to-100%'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </Link>
                <p className='font-bold text-md ml-3'>SHOP NOW</p> 
              </div>
          </div>
          <div className='w-[60%] px-5 hidden lg:block'>
            <img src="/images/banner-img.png" alt="Image 1" />
          </div>
      </div>
      <div className="flex justify-between items-center mt-[100px] px-17">
          <div className='w-full lg:w-[35%]'>
              <h1 className='font-bold text-6xl'>Mike New <br/>Collection!</h1>
              <p className='mt-11 text-neutral-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos rerum vitae tenetur dolore tempora laboriosam similique deserunt autem corrupti magni accusantium</p>
              <div className='flex  mt-5 items-center'>
                <Link href='/shop' className='h-13 w-13 bg-amber-500 flex justify-center items-center rounded-full text-white shadow-[0_10px_20px_rgba(255,108,0,0.2)] bg-linear-90 bg-linear-gradient-to-r from-[#ffba00] from-0% to-[#ff6c00] to-100%'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </Link>
                <p className='font-bold text-md ml-3'>SHOP NOW</p> 
              </div>
          </div>
          <div className='w-[60%] px-5 hidden lg:block'>
            <img src="/images/banner-img.png" alt="Image 1" />
          </div>
      </div>
    </OwlCarousel>
  );
}
