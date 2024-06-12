import React from 'react';
import Image from 'next/image';
import Hero from './Hero';
import Operation from './operation';
import Elevate from './elevate';
import Adapting from './adapting';
import Pricing from './pricing';
import Foru from './foru';



const Homepage = () => {

    // const rfidData = [
    //     {
    //         "title": "ONLINE SHOP",
    //         "description": "E-commerce excellence from\nsite to sale, and beyond",
    //         "image": "/images/onlineshop3.png",
    //         "highlightedText": "Discover ECommerce",
    //         "link": ""
    //     },
    //     {
    //         "title": "SUPPLY CHAIN",
    //         "description": "Connect every link with\nadvanced supply chain solutions",
    //         "image": "/images/supplychain.png",
    //         "highlightedText": "View Supply Chain Links",
    //         "link": ""
    //     },
    //     {
    //         "title": "ORDER MANAGEMENT",
    //         "description": "Accuracy and speed in every\norder, every time",
    //         "image": "/images/OMS.png",
    //         "highlightedText": "Explore Order Management",
    //         "link": ""
    //     },
    //     {
    //         "title": "CUSTOMER DATA\nPLATFORM",
    //         "description": "Harness customer insights for\npersonalized engagement",
    //         "image": "/images/cdp2.png",
    //         "highlightedText": "View CDP Tools",
    //         "link": ""
    //     },
    //     {
    //         "title": "PEOPLE FIRST",
    //         "description": "Empowering teams for\nsuperior service and\nproductivity",
    //         "image": "/images/peoplefirst.png",
    //         "highlightedText": "Learn about People First",
    //         "link": ""
    //     },
    //     {
    //         "title": "RFID Solutions",
    //         "description": "Inventory intillegence meets\ncutting-edge RFID\ntechnology",
    //         "image": "/images/rfid.png",
    //         "highlightedText": "Check out RFID",
    //         "link": ""
    //     }
    // ];

    // return (

    //     <div>
    //         <Hero />

    //         <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
    //             Diverse Solutions for Modern Challenges
    //         </h1>
    //         <p className="text-center mt-1">
    //             From enhancing online presence to streamlining in-store operations and beyond, we provide <br />
    //             the support you need to thrive in the modern retail landscape
    //         </p>


    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    //             {rfidData.map((item, index) => (
    //                 <div key={index} className="text-center mt-2">
    //                     <img src={item.image} alt={item.title} style={{ whiteSpace: 'pre-line' }} className="mx-auto h-24" />

    //                     <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
    //                     <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
    //                     <p className="text-green font-semibold">{item.highlightedText}</p>


    //                 </div>

    //             ))}

    //         </div>
    //         <Operation />
    //         <Elevate />
    //         <Adapting />
    //         <Pricing />
    //         <Foru />
    //     </div>
    // );


    const rfidData = [
        {
            "title": "ONLINE SHOP",
            "description": "E-commerce excellence from\nsite to sale, and beyond",
            "image": "/images/onlineshop3.png",
            "highlightedText": "Discover ECommerce",
            "link": ""
        },
        {
            "title": "SUPPLY CHAIN",
            "description": "Connect every link with\nadvanced supply chain solutions",
            "image": "/images/supplychain.png",
            "highlightedText": "View Supply Chain Links",
            "link": ""
        },
        {
            "title": "ORDER MANAGEMENT",
            "description": "Accuracy and speed in every\norder, every time",
            "image": "/images/OMS.png",
            "highlightedText": "Explore Order Management",
            "link": ""
        },
        {
            "title": "CUSTOMER DATA\nPLATFORM",
            "description": "Harness customer insights for\npersonalized engagement",
            "image": "/images/cdp2.png",
            "highlightedText": "View CDP Tools",
            "link": ""
        },
        {
            "title": "PEOPLE FIRST",
            "description": "Empowering teams for\nsuperior service and\nproductivity",
            "image": "/images/peoplefirst.png",
            "highlightedText": "Learn about People First",
            "link": ""
        },
        {
            "title": "RFID Solutions",
            "description": "Inventory intillegence meets\ncutting-edge RFID\ntechnology",
            "image": "/images/rfid.png",
            "highlightedText": "Check out RFID",
            "link": ""
        }
    ];

    return (

        <div>
            <Hero />


            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                Diverse Solutions for Modern Challenges
            </h1>
            <p className="text-center mt-1">
                From enhancing online presence to streamlining in-store operations and beyond, we provide <br />
                the support you need to thrive in the modern retail landscape
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {rfidData.map((item, index) => (
                    <div key={index} className="text-center mt-2">
                        <img src={item.image} alt={item.title} style={{ whiteSpace: 'pre-line' }} className="mx-auto h-24" />

                        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                        <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                        <p className="text-green font-semibold">{item.highlightedText}</p>


                    </div>

                ))}

            </div>
            <Operation />
            <Elevate />
            <Adapting />
            <Pricing />
            <Foru />

        </div>
    );
};



export default Homepage;



