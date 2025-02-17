import React from "react";
import { format } from "date-fns";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => onDateChange(e.target.value)}
    />
  );
};

export default DatePicker;