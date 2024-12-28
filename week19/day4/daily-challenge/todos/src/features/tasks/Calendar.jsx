import React from "react";

const Calendar = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default Calendar;