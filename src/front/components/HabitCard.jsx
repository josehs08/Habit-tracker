import React from "react";

const HabitCard = () => {
  return (
    <div className="bg-bright rounded-lg p-4 flex flex-col w-full text-background shadow-md shadow-darker">
      <h3 className="text-xl font-bold mb-0">Habit Name</h3>
      <p className="text-sm mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis deserunt laboriosam omnis ad ea tempore aliquam beatae quod atque inventore, modi odio facere ducimus cumque molestias temporibus? Quae, consequatur.</p>
      <div className="flex gap-4 items-center">
        <h3 className="text-sm">
          5 days
        </h3>
        <h3 className="text-sm">
          3 times
        </h3>
      </div>
      <div className="flex gap-4 items-center">
        <h3 className="text-sm">
          3 times
        </h3>

        <button className="bg-darker text-white rounded-lg px-4 py-2">
          Start
        </button>
      </div>
    </div>
  );
};

export default HabitCard;