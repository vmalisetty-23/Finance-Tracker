"use client";
import { useState } from "react";
export default function ExpensesForm() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const submitExpense = async (e) => {
    console.log("Title: ", title)
    console.log("Amount: ", amount)
    console.log("Description: ", description)

    const res = await fetch('http://localhost:3000/add-expense', {
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify({
        title,
        amount,
        description,
      }),
    });
  };
    return (
      <main>
        <div className="expenses-form max-w-lg mx-auto w-700">
          <h1 className="font-bold pb-4 text-xl text-red-400">ADD EXPENSE</h1>
          <form onSubmit={submitExpense} id="expensesform">
            <div className="grid gap-4">
              <div className="input-group">
                <input onChange={(e) => setTitle(e.target.value)} value={title} id="title" type="text" placeholder="Title" className="form-input text-black"></input>
              </div>
              <div className="input-group">
                <input onChange={(e) => setAmount(e.target.value)} value={amount} id="amount" type="text" placeholder="Amount" className="form-input text-black"></input>
              </div>
              <div className="input-group">
                <input onChange={(e) => setDescription(e.target.value)} value={description} id="description" type="text" placeholder="Description" className="form-input text-black"></input>
              </div>
              <div className="submit-button-exp">
                <button id="submit-button"className="border py-2 text-white bg-indigo-500 w-full">Make Transaction</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }