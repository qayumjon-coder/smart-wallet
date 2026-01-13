import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">So'nggi amallar</h2>
        <button className="text-sm text-indigo-600 font-medium hover:underline">
          Hammasini ko'rish
        </button>
      </div>

      <div className="divide-y divide-gray-50">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              {/* Ikona uchun aylana (rangi turiga qarab o'zgaradi) */}
              <div
                className={`p-2 rounded-full ${
                  item.type === "income"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {item.type === "income" ? (
                  <ArrowUpRight size={20} />
                ) : (
                  <ArrowDownRight size={20} />
                )}
              </div>

              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {item.category} • {item.date}
                </p>
              </div>
            </div>

            <div
              className={`font-bold ${
                item.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.type === "income" ? "+" : "-"}{" "}
              {item.amount.toLocaleString()} so'm
            </div>
            <button
              onClick={() => deleteTransaction(item.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
