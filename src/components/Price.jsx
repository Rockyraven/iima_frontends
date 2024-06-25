
import React from 'react';

const data = [
    { occupancy: "Double Occupancy", kids: { "0-5": 0, "6-11": 0, "12+": 0 }, tariff: 50000 },
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
        <h1 className='text-2xl text-center'>Event Price</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Occupancy
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                0-5 kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                6-11 kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                12+ kids
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                All inclusive 2 night stay tariff
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
        </div>
    );
};

export default Price;
