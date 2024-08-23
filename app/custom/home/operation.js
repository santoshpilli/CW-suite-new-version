import React from 'react';
const Operation = () => {
    const industryData = [
        {
            "title": "",
            "description": "",
            "image": "/images/operationstore.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Point of Sale",
            "description": "Fast, flexible, and reliable checkout experiences",
            "image": "/images/pointofsale.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Mobile Pos",
            "description": "Sales anywhere, anytime with mobile transactions",
            "image": "/images/posimg.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Scan & Go",
            "description": "Scan items, pay instantly, and skip the lines ",
            "image": "/images/scangoimg.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Store App",
            "description": "Your store's power, harnessed in an app",
            "image": "/images/storeapp.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Clienteling",
            "description": "Personalized service that brings customers back",
            "image": "/images/clientelling2.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Store Inventory",
            "description": "Real-time tracking for smarter stock management",
            "image": "/images/storeinventory.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Store Fulfilment",
            "description": "Seamless shopping from click to collection",
            "image": "/images/storefull.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Store Staff",
            "description": " Empower store staff with tools for excellence",
            "image": "/images/storestaff.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Self Checkout",
            "description": "Customer-powered efficiency for faster service",
            "image": "/images/storecheckout.png",
            "button": "",
            "link": ""
        },

    ];

    return (
        <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                Operational Excellence In-Store
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-9">
                {industryData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mt-4">
                        <img src={item.image} alt={item.title} className="mx-auto h-24" />
                        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Operation;