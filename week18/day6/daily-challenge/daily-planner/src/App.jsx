import React, { useState } from "react";
import DatePicker from "./components/DatePicker.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditTask = (taskId, text) => {
    setEditMode(taskId);
    setEditText(text);
  };

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TaskForm
        selectedDate={selectedDate}
        editMode={editMode}
        existingTask={editText}
        onCancel={() => setEditMode(null)}
      />
      <TaskList selectedDate={selectedDate} onEditTask={handleEditTask} />
    </div>
  );
};

export default App;