import Navbar from '@/components/Navbar'
import Graph from '@/components/Graph'
import Balance from '@/components/Balance'
import Image from 'next/image'

export default function dashboard() {
  return (
    <main>
      <div className='title text-emerald-400'>Finance Tracker</div>
      <div></div>
      <Navbar></Navbar>
      <div></div>
      <div></div>
      <Graph></Graph>
      <div></div>
      <Balance></Balance>
    </main>
  )
}