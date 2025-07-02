import { useState } from "react";

const CalendarView = ({ travelDates }) => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        📅 Travel Calendar - {currentMonth}
      </h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          const isTravelDay = travelDates.includes(day);
          return (
            <div
              key={day}
              className={`rounded-full p-2 ${
                isTravelDay ? "bg-green-500 text-white" : "bg-gray-100"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
