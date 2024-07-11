
import React from 'react';

const data = [
    { occupancy: "Single/Double Occupancy", kids: { "0-5": 0, "6-11": 0, "12+": 0 }, tariff: 50000 },
    { occupancy: "Double occupancy + 1 kid", kids: { "0-5": 1, "6-11": 0, "12+": 0 }, tariff: 50000 },
    { occupancy: "Double occupancy + 1 kid", kids: { "0-5": 0, "6-11": 1, "12+": 0 }, tariff: 65000 },
    { occupancy: "Double occupancy + 1 kid", kids: { "0-5": 0, "6-11": 0, "12+": 1 }, tariff: 70000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 2, "6-11": 0, "12+": 0 }, tariff: 50000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 1, "6-11": 1, "12+": 0 }, tariff: 65000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 1, "6-11": 0, "12+": 1 }, tariff: 70000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 0, "6-11": 2, "12+": 0 }, tariff: 80000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 0, "6-11": 1, "12+": 1 }, tariff: 85000 },
    { occupancy: "Double occupancy + 2 kids", kids: { "0-5": 0, "6-11": 0, "12+": 2 }, tariff: 90000 },
];

const Price = () => {
    return (
        <div id="price" className="w-full container mx-auto p-4 border-2 border-black m-5 ">
            <h1 className='text-2xl text-center'>HOTEL tariff (21-23 dec)</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Occupancy
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                0-5Years kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                6-11years kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                12years+ kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                All inclusive 2 night stay tariff (INR)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{row.occupancy}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.kids["0-5"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.kids["6-11"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.kids["12+"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.tariff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
            <div>
                
                <p className='font-bold'> Please note: </p>

                <p className='font-bold text-blue-600'> When and how to pay for hotel</p>
                <span className='font-semibold'>A</span> - You will receive an email from advanihotels within a few days of submitting the reunion registration form. Pls follow the instructions and make payment of INR 50,000 for two nights. You can pay for your kids accommodation later during your stay.
                <br />
                <span className='font-semibold'>B</span> -  In case you are travelling solo and wish to share rooms with a batchmate, OC can help in your pairing
                <br />
                <br/>
                <p className='font-bold text-blue-600'>Kids accommodation </p>

                <span className='font-semibold'>A</span> - Kids over 12 years are considered adults and charged INR 20.000  for two nights. 6-11 age kids are charged INR 15,000 for two nights. Kids under 6 yrs are complimentary.
                <br />
                <span className='font-semibold'>B</span> - As a special discount, the first 50 kids (6-17 yrs) to be registered, will receive a discount of INR 4,000  per kid for their respective two night tariff. Registration time stamp will be used as proof for identifying first 50 kids. In the event of less than 50 kids attending the reunion, the discount of 1.95 Lac will be evenly distributed across the attending kids.
                <br/>
                <br/>
                <p className='font-bold text-blue-600' >What’s included </p>
                <span className='font-semibold'>A</span> -  Hotel pricing includes accommodation and all major meals over the 2N stay
                <br />
                <span className='font-semibold'>B</span> -  We are working on getting complimentary shared coach transfer from/to Dabolim airport/ Madgaon station by the hotel. It may not be possible for individual transfers or at odd times or from MOPA airport. .<br />
                <br/>
                <p className='font-bold text-blue-600'>When to Reach </p>
                <span className='font-semibold '>A</span> -  Check-in time on Dec 21 is 2PM and check-out time is 12 noon. On Dec 21, lunch will be arranged from around 12:30PM. In case you miss lunch at arrival on 21st Dec, you have an option to avail it at departure on 23rd Dec
                <br />
                <span className='font-semibold '>B</span> -  Preferably plan your arrival at Goa airport/ station between 7 am to noon on 21st dec and departure post 3 pm on 23rd dec. The hotel is 1 hr from Dabolim (GOI) and 2 hrs from MOPA/ North Goa (GOX)
                <br />

            </div>

        </div >
    );
};

export default Price;
