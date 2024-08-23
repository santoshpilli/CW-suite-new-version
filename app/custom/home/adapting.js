import React from 'react';

const Adapting = () => {
    const industryData = [
        {
            "title": "Fashion",
            "description": "Stylish solutions to stay ahead in fast-paced fashion retailing, delivering trends seamlessly from runway to checkout",
            "image": "/images/fashion1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Grocery",
            "description": "Fresh approaches to inventory, sales, and customer experiences, ensuring every aisle meets the highest standards",
            "image": "/images/grocery1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Sports Retailer",
            "description": "Dynamic systems to keep up with the active demands of sports retail, from equipment tracking to fast checkout",
            "image": "/images/sports1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Department Store",
            "description": "Versatile tools for a variety of departments, creating unified shopping experiences under one roof ",
            "image": "/images/departmentstore1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Electronics",
            "description": "Precise technology for electronic retailers to manage intricate inventories and engage tech-savvy shoppers",
            "image": "/images/electronics1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Jewelery",
            "description": "Elegant solutions for the fine details of jewelry retail, enhancing the luxury of every customer interaction",
            "image": "/images/jewellery1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Health & Beauty",
            "description": "Beauty meets functionality with our solutions that cater to the personalized needs of health and beauty markets",
            "image": "/images/healthandbeauty1.png",
            "button": "",
            "link": ""
        },
        {
            "title": "Furniture & Furnishings",
            "description": "Designing comfort for retailers with robust systems to manage large inventories and ensure customer satisfaction",
            "image": "/images/homefurniture1.png",
            "button": "",
            "link": ""
        },


    ];

    return (
        <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                Adapting Our Technology to Your <br />Industry Landscape
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 pl-3 pr-3">
                {industryData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mt-4">
                        <img src={item.image} alt={item.title} className="mx-auto h-20 ml-5" />
                        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adapting;