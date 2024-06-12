import React from "react";
import Image from "next/image";
const Elevate = () => {
    return (
        <div className="flex flex-col justify-center items-center  bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-center ">Elevate Your Customer's Journey</h1> */}
                <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-center mt-10 ">Elevate Your Customer's Journey</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mt-[5rem]">
                        <h2 className="text-xl md:text-xl lg:text-1xl font-bold mb-2 text-[#475467]">Shopping App</h2>
                        <p className="text-gray-700">Put the power of retail in your customers' hands with a comprehensive mobile application. Elevate the mobile shopping experience with intuitive design and powerful features, allowing consumers to shop, order, and stay connected with your brand anytime, anywhere.</p>
                        <button

                            className="mt-5 bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg"
                        >
                            Learn More

                        </button>
                    </div>

                    <div className="md:w-1/2 relative  top-0 left-0 w-full h-full object-cover z-0 mt-[5rem]">
                        <Image
                            src="/images/shoppingapp1.png"
                            width={735}
                            height={660}
                            alt="invoicing pricing img"
                        />
                    </div>




                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative  top-0 left-0 w-full h-full object-cover z-0">
                        <Image
                            src="/images/loyaltyprogram.png"
                            width={735}
                            height={660}
                            alt="invoicing pricing img"
                        />
                    </div>
                    <div className="md:w-1/2 md:pr-8 ml-[5.25rem]">
                        <h2 className="text-xl md:text-xl lg:text-1xl font-bold mb-2 text-[#475467]">Loyalty Programs</h2>
                        <p className="text-gray-700">Engage customers with personalized rewards, track participation, and analyze behavior to fine-tune offers. Enhance customer retention and turn every purchase into an opportunity to strengthen brand loyalty.</p>
                        <button

                            className="mt-5 bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg"
                        >
                            Learn More

                        </button>
                    </div>






                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mt-[5rem]">
                        <h2 className="text-xl md:text-xl lg:text-1xl font-bold mb-2 text-[#475467]">Digital Storefront</h2>
                        <p className="text-gray-700">Seamlessly extend your physical storefront into the digital realm with our Digital Store Front solution. Designed for omni-channel excellence, it offers an effortless way for retailers to expand online, maintaining brand consistency and customer engagement across all platforms.</p>
                        <button

                            className="mt-5 bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] justify-center rounded-full text-white text-sm flex items-center free-trial-btn-hover font-normal font-Inter transition-all duration-200 ease-in hover:shadow-lg"
                        >
                            Learn More

                        </button>
                    </div>

                    <div className="md:w-1/2 relative  top-0 left-0 w-full h-full object-cover z-0 mt-[5rem]">
                        <Image
                            src="/images/digitalstore.png"
                            width={735}
                            height={660}
                            alt="invoicing pricing img"
                        />
                    </div>




                </div>

            </div>



        </div>
    );
};

export default Elevate;


// import React from "react";
// import Image from "next/image";

// const Elevate = () => {
//     return (
//         <div className="flex flex-col justify-center items-center bg-gray-100">
//             <div className="max-w-4xl mx-auto px-4 py-8">
//                 <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
//                     Elevate Your Customer's Journey
//                 </h1>

//                 <div className="flex flex-col md:flex-row my-10">
//                     <div className="order-2 md:order-1 md:w-1/2 md:pr-8 mt-10 md:mt-0">
//                         <h2 className="text-xl font-bold mb-2 text-[#475467]">Shopping App</h2>
//                         <p className="text-gray-700 mb-5">
//                             Put the power of retail in your customers' hands with a comprehensive mobile application. Elevate the mobile shopping experience with intuitive design and powerful features, allowing consumers to shop, order, and stay connected with your brand anytime, anywhere.
//                         </p>
//                         <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                     <div className="order-1 md:order-2 md:w-1/2 flex justify-center mt-10 md:mt-0">
//                         <Image
//                             src="/images/shoppingapp1.png"
//                             width={735}
//                             height={660}
//                             alt="Shopping App"
//                         />
//                     </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row my-10">
//                     <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//                         <Image
//                             src="/images/loyaltyprogram.png"
//                             width={735}
//                             height={660}
//                             alt="Loyalty Program"
//                         />
//                     </div>
//                     <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0">
//                         <h2 className="text-xl font-bold mb-2 text-[#475467]">Loyalty Programs</h2>
//                         <p className="text-gray-700 mb-5">
//                             Engage customers with personalized rewards, track participation, and analyze behavior to fine-tune offers. Enhance customer retention and turn every purchase into an opportunity to strengthen brand loyalty.
//                         </p>
//                         <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row my-10">
//                     <div className="md:w-1/2 md:pr-8 mt-10 md:mt-0">
//                         <h2 className="text-xl font-bold mb-2 text-[#475467]">Digital Storefront</h2>
//                         <p className="text-gray-700 mb-5">
//                             Seamlessly extend your physical storefront into the digital realm with our Digital Store Front solution. Designed for omni-channel excellence, it offers an effortless way for retailers to expand online, maintaining brand consistency and customer engagement across all platforms.
//                         </p>
//                         <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//                         <Image
//                             src="/images/digitalstore.png"
//                             width={735}
//                             height={660}
//                             alt="Digital Storefront"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Elevate;




