const TimeTable = ({ timeTable }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-4">
      <h3 className="text-lg font-semibold mb-4">🚌 Bus Time Table</h3>
      <ul className="divide-y divide-gray-200">
        {timeTable.map((entry, i) => (
          <li key={i} className="py-2 flex justify-between">
            <span>{entry.route}</span>
            <span>{entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeTable;
