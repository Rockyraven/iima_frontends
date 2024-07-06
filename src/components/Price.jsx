
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
                <p className='text-red-500'>Remarks</p>

                <span className='font-semibold'>A</span> - Accommodation for the first 13 kids in 6-11 age group is free. Maximum 1 kid per family in 6-11 age group to be accommodated free.
                <br/>
                <span className='font-semibold'>B</span> - Kids over 12 years are considered adults and charged INR 10,000 per night. 6-11 age kids are charged INR 7,500 per night<br/>
                <span className='font-semibold'>C</span> - Hotel pricing includes accommodation and all meals.<br/>
                <span className='font-semibold'>E</span> - We are working on getting complimentary shared coach transfer from/to Dabolim airport/ Madgaon station by the hotel. It may not be possible for individual transfers or at odd times or from MOPA airport.<br/>
                <span className='font-semibold'>E</span> - Event pricing is INR 31,416 per alumnus till Aug 15, 2024. This is additional to hotel tariff. The pricing increases to INR 35,000 after Aug 15. The money needs to be transferred from a domestic account only.<br/>
                <span className='font-semibold'>F</span> - Account details for transfer of event tariff and hotel tariff amount will be shared separately on WIMWI 2004 WhatsApp group.<br/>
                <span className='font-semibold'>G</span> - Caravela will reach out to you on hotel booking process post registration. Check-in time on Dec 21 is 2PM and check-out time is 12 noon. On Dec 21, lunch will be arranged from around 12:30PM.<br/>
                <span className='font-semibold'>H</span> - Preferably plan your arrival in Goa between 7 am-noon on 21st dec and departure post 230 pm on 23rd dec. The hotel is 1 hr from Dabolim (GOI) and 2 hrs from MOPA/ North Goa (GOX)
            </div>

        </div>
    );
};

export default Price;
