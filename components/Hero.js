import React from 'react'
import { useState } from 'react'
import { data } from '../data'

function Hero() {
    const [search, setSearch] = useState('')

    return (
        <main className=''>
            <h1 className='text-center my-6 font-semibold text-xl '>Contact Keeper</h1>

            <input onChange={(e) => setSearch(e.target.value)} type="text" className='my-3 border rounded-lg flex py-2 px-4 items-center justify-center m-auto w-[75%]' placeholder='Search Contacts' />


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg max-w-[75%] w-full  m-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data
                                .filter((item) => search === '' || item.first_name.includes(search))
                                .map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.first_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.phone}
                                        </td>
                                    </tr>
                                ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </tbody>
                </table>
            </div>


        </main>
    )
}

export default Hero
