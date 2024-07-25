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



    const homeplatfom = [
        {
            img: "/images/platfom-1.png",
            header: "Unify sales channels in real time",
            description:
                "Allows retailers to seamlessly integrate and manage all of their sales channels from one central location, in real time",
        },
        {
            img: "/images/platfom-2.png",
            header: "Streamline inventory management",
            description:
                "Optimize your inventory system to reduce costs, improve customer satisfaction, and better adapt to changes in demand",
        },
        {
            img: "/images/platfom-3.png",
            header: "Empower store associates",
            description:
                "Well-equipped associates are able to assist customers effectively, process transactions efficiently, and contribute to the overall success of the store",
        },
        {
            img: "/images/platfom-4.png",
            header: "Exceed customer expectations",
            description:
                "Differentiate yourselves from competition by going above and beyond what is expected in order to provide an exceptional experience for customers",
        },
    ];






    return (

        <div>
            <Hero />


            {/* <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                Diverse Solutions for Modern Challenges
            </h1>
            <p className="text-center mt-1">
                From enhancing online presence to streamlining in-store operations and beyond, we provide <br />
                the support you need to thrive in the modern retail landscape
            </p> */}


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {rfidData.map((item, index) => (
                    <div key={index} className="text-center mt-2">
                        <img src={item.image} alt={item.title} style={{ whiteSpace: 'pre-line' }} className="mx-auto h-24" />

                        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                        <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                        <p className="text-green font-semibold">{item.highlightedText}</p>


                    </div>

                ))}

            </div> */}

            <div className="max-w-[1120px] mx-auto mt-16 sm:mt-[80px] 3xl:mt-[117px] px-3">
                <div>
                    <h2 className="font-Inter text-[36px] sm:text-3xl text-center font-bold">
                        A truly unified commerce platfom
                    </h2>
                    <div className="justify-center flex mt-[12px] 3xl:mt-[36px]">
                        <p className="font-inter font-normal text-md sm:text-md max-w-[846px] text-center text-[#475467]">
                            Brings together all aspects of a retailer&apos;s business,
                            including inventory management, customer data, sales channels, and
                            more, into a single, cohesive system
                        </p>
                    </div>
                    <div className=" mt-10 sm:mt-[15px] 3xl:mt-20 justify-between flex flex-wrap">
                        {homeplatfom.map((item, index) => (
                            <div key={index} className="mt-5 sm:mt-10">
                                <Image
                                    className="hover:scale-[1.02] 2xl:max-w-none lg:max-w-[600px] transition-all duration-200 ease-in"
                                    alt="platfom-img"
                                    src={item.img}
                                    width={480}
                                    height={300}
                                />
                                <h4 className="font-Inter text-xl pt-1 text-[#101828] font-bold">
                                    {item.header}
                                </h4>
                                <p className="font-inter font-normal text-base mt-[6px] 3xl:mt-[12px] text-[#475467] max-w-[400px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
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



