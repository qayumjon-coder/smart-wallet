import { useState } from 'react'

function TransactionForm({onAdd , transactions}) {
    const [form, setForm] = useState({title: "", amount: "", type: "expense"});
    const [category, setCategory] = useState("Boshqa")

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm((prev) => ({
          ...prev,
          [name]:value
        }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!form.title || !form.amount){
        return

      } ;

      const newTransaction = {
        ...form,
        id: Date.now(),
        amount: +form.amount,
        category,
        date: new Date().toLocaleDateString()
      }

      onAdd([...transactions, newTransaction]);
    }

  return (
    <div>
      {/* Konteyner - oq fonda, chetlari yumshoq va soya bilan */}
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
  <h2 className="text-lg font-bold text-gray-800 mb-4">Yangi amal qo'shish</h2>
  
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
    
    {/* Nomi inputi */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Nomi</label>
      <input 
        type="text" 
        name="title"
        value={form.title}
        required
        onChange={handleChange}
        placeholder="Masalan: Maosh"
        className="w-full p-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
      />
    </div>

    {/* Miqdori inputi */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Miqdori (so'mda)</label>
      <input 
        type="number" 
        name="amount"
        min="500"
        required
        value={form.amount}
        onChange={handleChange}
        placeholder="0"
        className="w-full p-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
      />
    </div>

    {/* Turi (Select) */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">Turi</label>
      <select value={form.type} onChange={handleChange} name='type' className="w-full p-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
        <option value="expense">Xarajat</option>
        <option value="income">Daromad</option>
      </select>
    </div>

    {/* Kategoriyalar */}
    <select 
  value={category} 
  onChange={(e) => setCategory(e.target.value)}
  className="border p-2 rounded w-full mb-2"
>
  <option value="Ovqat">Ovqat</option>
  <option value="Transport">Transport</option>
  <option value="Uy-joy">Uy-joy</option>
  <option value="O'yin-kulgi">O'yin-kulgi</option>
  <option value="Boshqa">Boshqa</option>
</select>

    {/* Qo'shish tugmasi */}
    <button 
      type="submit"
      onChange={handleChange}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-2.5 rounded-xl transition-all shadow-md active:scale-95"
    >
      Qo'shish
    </button>

  </form>
</div>
    </div>
  )
}

export default TransactionForm
