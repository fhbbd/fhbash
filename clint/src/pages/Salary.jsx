import React, { useEffect } from 'react'

function Salary() {
  return (
    <div className='w-full h-screen'>
        <div className='w-3/5 py-2 border-stone-200 border-[1px] m-auto flex flex-col '>
            <div className='flex flex-col items-center justify-center'>
                <h2 class="text-3xl uppercase">Fazlul Haque Bidhya Niketon</h2>
                <span className='text-sm'>205, Ashkona Medical Road, Dokkhinkhan Dhaka-1230</span>
            </div>
                <div className='flex flex-col items-start justify-start w-full p-4'>
                    <div className='w-full flex flex-col items-center justify-center uppercase text-lg font-semibold'>
                         <h2>Find Salary</h2>
                    </div>
                    {/* ============from=================== */}
                        <form action="" className='w-full py-4'>
                            <div className='grid grid-cols-5 items-center justify-between w-full'>
                                <label className='col-span-1' htmlFor="search">Search TID</label>
                                <input className='col-span-3 focus:outline-none border-[1px] border-stone-200 px-4 py-1' type="text" />
                                <div className='col-span-1 flex flex-row items-center justify-center'><button className='py-1 px-4 bg-sky-400 text-white'>Search</button></div>
                            </div>
                        </form>
                    {/* =============End Form================== */}
                    <div className='grid grid-cols-4 items-center justify-center w-full py-2 bg-sky-400 text-white px-4'>
                        <div className='col-span-1'>TID</div>
                        <div className='col-span-1'>Name</div>
                        <div className='col-span-1'>Degicnation</div>
                        <div className='col-span-1'></div>
                    </div>
                    <div className='grid grid-cols-4 w-full items-center justify-center py-1 bg-gray-100  px-4'>
                        <div className='col-span-1'>FHB151201</div>
                        <div className='col-span-1'>Md Pavel Hossain</div>
                        <div className='col-span-1'>Asst Teacher</div>
                        <div className='col-span-1 text-center'><button className='py-[1px] px-4 bg-green-500 text-white rounded-lg'>Details</button></div>
                    </div>
                </div>
            <div></div>

        </div>
    </div>
  )
}

export default Salary