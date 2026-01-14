import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard = ({income, expense, balance}) => {
  return (
    <div className="bg-gray-50 p-4 md:p-8">
      {/* Sarlavha */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Mening Hamyonim</h1>
        <p className="text-gray-500">Xarajatlaringizni aqlli boshqaring</p>
      </header>

      {/* Statistika Kartochkalari */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Umumiy Balans */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Umumiy Balans</p>
            <h3 className="text-xl font-bold text-gray-900">{balance}</h3>
          </div>
        </div>

        {/* Daromad */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <ArrowUpRight size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Oylik Daromad</p>
            <h3 className="text-xl font-bold text-gray-900">{income}</h3>
          </div>
        </div>

        {/* Xarajat */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-xl">
            <ArrowDownRight size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Oylik Xarajat</p>
            <h3 className="text-xl font-bold text-gray-900">{expense}</h3>
          </div>
        </div>

      </div>

    
    </div>
  );
};

export default Dashboard;