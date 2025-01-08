import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddHabit({ onAddHabit }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit({ name, frequency, startDate });
    setName("");
    setFrequency("Daily");
    setStartDate("");
    setIsFormOpen(false);
  };

  return (
    <div className="relative p-6">
      {/* Button to Open Form */}
      {!isFormOpen && (
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaPlus />
          <span>Add Habit</span>
        </button>
      )}

      {/* Form */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="absolute top-16 left-0 right-0 mx-auto bg-white shadow-2xl rounded-lg p-6 w-full max-w-lg animate-slide-down"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a New Habit</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Habit Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Morning Jog"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Save Habit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddHabit;
