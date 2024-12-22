import React from "react";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100'>
      <div className='flex items-center mb-4 md:mb-0'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800'>Habit Tracker</h1>
          <p className='text-lg text-gray-600'>
            Crear y gestionar tus hábitos de manera eficiente
          </p>
        </div>
      </div>
      <button className='mt-4 md:mt-0 py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'>
        Comenzar ahora
      </button>
    </section>
  );
};

export default Hero;
