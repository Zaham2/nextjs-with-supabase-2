"use client"

import GlobalContext from '@/contexts/GlobalContext';
import React, { useContext, useState } from 'react';

function DatePicker() {

  const { day, setDay } = useContext(GlobalContext)

  const handleDateChange = (date: string) => {
    setDay(date);
  };

  return (
    <div className="flex flex-col my-4 mx-auto justify-center">
      <input
        type="date"
        id="datepicker"
        className=" m-6 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        onChange={(e) => handleDateChange(e.target.value)}
        value={day}
      />
      {day && (
        <p className="mt-2 text-sm text-gray-500">Selected Date: {day}</p>
      )}
    </div>
  );
}

export default DatePicker;
