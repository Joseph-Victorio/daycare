import {  useState } from 'react';

import { motion } from 'framer-motion';
// import axios from 'axios';

const imgBoxVariants = {
  hidden: {
    x: 100
  },
  visible: {
    x: 0
  }
};

const HeaderCardCarousel = () => {
 
  const [step, setStep] = useState(1);

  const handleLeftArrow = () => {
    setStep(step === 1 ? 3 : step - 1);
  };

  const handleRightArrow = () => {
    setStep(step === 3 ? 1 : step + 1);
  };

 

 

  return (
    <>
      {/* CARD CAROUSEL */}
      {step === 1 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] md:w-[300px] lg:w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px]  mx-auto'>
            <img src="/kegiatan/dihukum.jpg" alt="Paket Produk" className=' mx-auto w-50 rounded-md' />
          </div>
          {/* CONTENT */}
          <div className='flex justify-between items-center'>
            <div className='mt-2'>
              {/* NAMA */}
              <p className='text-[24px] text-primary'>
                Produktif
              </p>
            
            </div>
            <a
              href='/penitipan'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px] mx-auto'>
            <img src="/kegiatan/makan.jpg" alt="" className='rounded-md' />
          </div>
          {/* CONTENT */}
          <div className='flex justify-between items-center'>
            <div className='mt-2'>
              {/* NAMA */}
              <p className='text-[24px] text-primary'>
                Motorik & Social
              </p>
           
            </div>
            <a
              href='/penitipan'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px] mx-auto'>
            <img src="/kegiatan/minion2.jpg" alt="Kegiatan Kreatif" className='rounded-md'/>
          </div>
          {/* CONTENT */}
          <div className='flex justify-between items-center'>
            <div className='mt-2'>
              {/* NAMA */}
              <p className='text-[24px] text-primary'>
                Kegiatan Kreatif
              </p>
            
             
            </div>
            <a
              href='#'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}

      {/* BUTTON KIRI KANAN */}
      <div className='flex items-center gap-2 mt-4'>
        <button
          onClick={handleLeftArrow}
          className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
          <img src="/icons/left.svg" alt="Left Arrow" />
        </button>
        <button
          onClick={handleRightArrow}
          className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
          <img src="/icons/right.svg" alt="Right Arrow" />
        </button>
      </div>
    </>
  );
};

export default HeaderCardCarousel;
