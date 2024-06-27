import React from 'react'

function Admission() {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 m-auto '>
        <div className='uppercase text-3xl '>Fazlul Haque Bidhya Niketon</div>
        <div className='capitalize text-xl'>New and old students states</div>
        <div className='flex flex-row w-full items-center justify-end border-b-[1px] border-sky-400'>
            <label className='' htmlFor="data">Date:</label>
            <span>15/5/24</span>
        </div>
        <div>
        <table class="table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr className='border border-slate-300'>
                    <th className='border border-slate-300'>Artist</th>
                    <th className='border border-slate-300'>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
        </table>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Admission