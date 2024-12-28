import React, { useState } from "react";
import TaskList from "./features/tasks/TaskList";
import TaskInput from "./features/tasks/TaskInput";
import Calendar from "./features/tasks/Calendar";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <div>
      <h1>Daily Planner</h1>
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TaskInput selectedDate={selectedDate} />
      <TaskList selectedDate={selectedDate} />
    </div>
  );
};

export default App;