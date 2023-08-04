"use client";
import React, {useEffect, useState} from 'react';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

export default function ExpenseHistory() {
  const [expenses, setExpenses] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3000/get-expenses")
      .then(expenses => setExpenses(expenses.data))
      .catch(err => console.log(err))
      console.log(expenses)
    },[]);

    const deleteExpenses = async (id, title) => {
        if(window.confirm(`Are you sure you want to delete ${title}`)){
            axios.delete(`http://localhost:3000/delete-expense/${id}`)
            window.location.reload(false);
  
        } else {
  
        }
      };

    return (
      <main>
        <div className="history font-bold text-xl pb-8 text-red-400">EXPENSES HISTORY</div>
        <table className="table">
          <thead>
            <tr className='text-indigo-500'>
              <th>
                Title
              </th>
              <th>
                Amount
              </th>
              <th>
                Description
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              expenses.map(i => {
                return <tr key={i._id}>
                  <td>{i.title}</td>
                  <td>{i.amount}</td>
                  <td>{i.description}</td>
                  <td>
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteExpenses(i._id, i.title)}></FontAwesomeIcon>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </main>
    )
  }