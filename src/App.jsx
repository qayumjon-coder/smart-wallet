import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionsList";
import TransactionForm from "./components/TransactionForm";
import { useState, useEffect } from "react";
import DashboardChart from "./components/DashboardChart";

function App() {
  const initialData = [
    {
      id: 1,
      title: "Oylik maosh",
      amount: 5000000,
      type: "income",
      date: "2024-05-01",
    },
    {
      id: 2,
      title: "Kvartira ijara",
      amount: 2500000,
      type: "expense",
      date: "2024-05-02",
    },
    {
      id: 3,
      title: "Bozorlik",
      amount: 450000,
      type: "expense",
      date: "2024-05-03",
    },
    {
      id: 4,
      title: "Freelance loyiha",
      amount: 1200000,
      type: "income",
      date: "2024-05-04",
    },
    {
      id: 5,
      title: "Internet va telefon",
      amount: 150000,
      type: "expense",
      date: "2024-05-05",
    },
  ];

  // Getting the Item from localStorage
  const [transactions, setTransactions] = useState(initialData, () => {
    const saved = localStorage.getItem("my_transactions");

    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all'); // 'all', 'income', 'expense'

  // Setting the Item to loacalStorage
  useEffect(() => {
    localStorage.setItem("my_transactions", JSON.stringify(transactions));
  }, [transactions]);

  let totalIncome = transactions.reduce((sum, element) => {
    return element.type === "income" ? sum + element.amount : sum;
  }, 0);

  let totalExpense = transactions.reduce((sum, element) => {
    return element.type === "expense" ? sum + element.amount : sum;
  }, 0);

  const deleteTransaction = (id) => {
    const filteredTransactions = transactions.filter((item) => item.id !== id);

    setTransactions(filteredTransactions);
  };

  let balance = totalIncome - totalExpense;

  const filteredTransactions = transactions.filter(t => {
  if (filter === 'all') return true; // Hammasini ko'rsat
  return t.type === filter; // Faqat 'income' yoki 'expense'ni ko'rsat
});
  return (
    <>
        <Dashboard
          balance={balance}
          income={totalIncome}
          expense={totalExpense}
        />

        <DashboardChart transactions={transactions} />

        <div className="flex gap-2 my-4">
  <button onClick={() => setFilter('all')} className={filter === 'all' ? 'bg-blue-500 text-white p-2' : 'bg-gray-200 p-2'}>Hammasi</button>
  <button onClick={() => setFilter('income')} className={filter === 'income' ? 'bg-green-500 text-white p-2' : 'bg-gray-200 p-2'}>Daromad</button>
  <button onClick={() => setFilter('expense')} className={filter === 'expense' ? 'bg-red-500 text-white p-2' : 'bg-gray-200 p-2'}>Xarajat</button>
</div>
      { filteredTransactions.length === 0 ? (
        <p className="text-center text-gray-500 my-4">Ma'lumotlar topilmadi...</p>
      ) : (
        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />)}
        <TransactionForm onAdd={setTransactions} transactions={transactions} />
    </>
  );
}

export default App;
