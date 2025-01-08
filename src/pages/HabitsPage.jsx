import { useState } from "react";
import HabitList from "../features/habits/HabitList";
import AddHabit from "../features/habits/AddHabit";

function HabitsPage() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="p-6">
        <AddHabit onAddHabit={handleAddHabit} />
        <HabitList habits={habits} />
      </div>
    </div>
  );
}

export default HabitsPage;
