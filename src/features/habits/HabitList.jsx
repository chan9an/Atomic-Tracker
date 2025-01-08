function HabitList({ habits }) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Habits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 p-4 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-xl font-semibold">{habit.name}</h3>
              <p>Frequency: {habit.frequency}</p>
              <p>Start Date: {habit.startDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default HabitList;
  