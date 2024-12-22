import React from "react";

const HabitForm = () => {
  return (
    <div className='border'>
      <h3>Crear nuevo Habit</h3>
      <form>
        <input type='text' placeholder='Nombre del Habit' />
        <textarea placeholder='Descripción del Habit'></textarea>
        <input type='date' placeholder='Fecha de inicio del Habit' />
        <input type='date' placeholder='Fecha de fin del Habit' />
        <button>Crear</button>
      </form>
    </div>
  );
};

export default HabitForm;
