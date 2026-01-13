import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: 'bottom', // Legendni pastga tushiradi
    },
  },
  maintainAspectRatio: false, // O'lchamni nazorat qilish uchun
};

import React from 'react'

function DashboardChart({transactions}) {

  const categoryTotals = transactions
  .filter(t => t.type === 'expense') // Faqat xarajatlarni hisoblaymiz
  .reduce((acc, t) => {
    const catName = t.category || "Noma'lum";
    acc[catName] = (acc[catName] || 0) + Number(t.amount);
    return acc;
  }, {});

  const data = {
  labels: Object.keys(categoryTotals), // ["Ovqat", "Transport"]
  datasets: [
    {
      label: 'Xarajatlar',
      data: Object.values(categoryTotals), // [50000, 20000]
      backgroundColor: [
        '#f52350',
        '#0099ff',
        '#f8b60f',
        '#00ff73',
      ],
    },
  ],
};

// Agar xarajatlar bo'lmasa, grafikni ko'rsatmaymiz
  if (Object.keys(categoryTotals).length === 0) {
    return <p className="text-center text-gray-500">Grafik uchun ma'lumot yetarli emas</p>;
  }

  return (
        <div style={{ height: '300px', width: '300px', margin: '0 auto' }} className="w-full max-w-xs mx-auto my-8">
      <h3 className="text-center font-bold mb-4">Xarajatlar tahlili</h3>
      <Doughnut data={data} options={options}/>
    </div>
  )
}

export default DashboardChart