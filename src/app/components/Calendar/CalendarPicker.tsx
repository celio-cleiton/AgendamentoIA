"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from "react-responsive";
import { useCalendarStore } from "../../stores/calendarStore";

export default function CalendarPicker() {
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const CustomInput = ({ value, onClick }: { value: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="w-full bg-white p-4 rounded-lg shadow-md text-lg font-semibold hover:bg-gray-50"
    >
      {value || "Selecione uma data"}
    </button>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Escolha seu horário</h2>

      {isMobile ? (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          customInput={<CustomInput value="" onClick={() => {}} />}
          withPortal
        />
      ) : (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          minDate={new Date()}
          className="border-none"
        />
      )}

      <TimeSlotGrid />
    </div>
  );
}

const TimeSlotGrid = () => {
  const { aiSuggestions } = useCalendarStore();

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Sugestões da IA:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {aiSuggestions.map((time) => (
          <button
            key={time}
            className="bg-blue-100 text-blue-800 p-3 rounded-lg hover:bg-blue-200 transition-colors text-sm md:text-base"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
