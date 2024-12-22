import React, { useState } from "react";

const HabitCard = ({ habit }) => {
  return (
    <div className='flex gap-4'>
      <button>Crear</button>
      <div>
        <h3>{habit.name}</h3>
        <p>{habit.description}</p>
      </div>
      <button>Borrar</button>
    </div>
  );
};

export default HabitCard;
