import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, 
  Tooltip,
  Legend
)

function RentPaymentGraph({ Stripe,Wallet,title}) {

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Wallet',
        data: [Wallet],
        backgroundColor: '#EBD060',
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'Stripe',
        data: [Stripe],
        backgroundColor: '#5ADB96',
        borderColor: 'black',
        borderWidth: 1
      },
    ]
  }

  const options = {

  }
  return (
    <div>
      <h5>{title}</h5>

      <div>
        <Bar
          data={data}
          options={options}
        ></Bar>
      </div>
    </div>
  )
}

export default RentPaymentGraph