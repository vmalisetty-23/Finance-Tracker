import ExpensesForm from "@/components/ExpensesForm"
import ExpenseHistory from "@/components/ExpensesHistory"
import Navbar from "@/components/Navbar"


export default function transactions() {
  return (
    <main>
      <div className='title text-red-400'>Expenses</div>
      <div></div>
      <Navbar></Navbar>
      <div></div>
      <div></div>
      <ExpensesForm></ExpensesForm>
      <div></div>
      <ExpenseHistory></ExpenseHistory>
    </main>
  )
}