import { useState, useEffect } from "react";

const Stats = () => {
  const statsData = [
    { value: 1000, label: "Cups of Coffee Served" },
    { value: 500, label: "Farmers Reached" },
    { value: 200, label: "Indirect Jobs Created" },
    { value: 50, label: "Tons of Coffee Processed" }, // New impact
    { value: 20, label: "Countries Exported To" }, // New impact
  ];

  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      let startValue = 0;
      let endValue = stat.value;
      let increment = Math.ceil(endValue / 100); // Controls speed

      return setInterval(() => {
        setAnimatedStats((prevStats) => {
          const newStats = [...prevStats];

          if (newStats[index] < endValue) {
            newStats[index] = Math.min(newStats[index] + increment, endValue);
            return newStats;
          } else {
            clearInterval(intervals[index]); // Stop when the final value is reached
            return prevStats;
          }
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval); // Cleanup function
  }, []); // Run only once when component mounts

  return (
    <section className="py-16 bg-amber-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
              <h3 className="text-3xl font-semibold mb-2">{animatedStats[index]}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
