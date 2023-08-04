import IncomeForm from "@/components/IncomeForm"
import Navbar from "@/components/Navbar"
import IncomeHistory from "@/components/IncomeHistory"


export default function income() {
  return (
    <main>
      <div className='title text-emerald-400'>Income</div>
      <div></div>
      <Navbar></Navbar>
      <div></div>
      <div></div>
      <IncomeForm></IncomeForm>
      <div></div>
      <IncomeHistory></IncomeHistory>
    </main>
  )
}