import React from "react";
import Image from "next/image";

const Elevate = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-10">
                    Elevate Your Customer's Journey
                </h1>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="order-2 md:order-1 md:w-1/2 md:pr-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">Shopping App</h2>
                        <p className="text-gray-700 mb-5">
                            Put the power of retail in your customers' hands with a comprehensive mobile application. Elevate the mobile shopping experience with intuitive design and powerful features, allowing consumers to shop, order, and stay connected with your brand anytime, anywhere.
                        </p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                            Learn More
                        </button>
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src="/images/shoppingapp1.png"
                            width={735}
                            height={660}
                            alt="Shopping App"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src="/images/loyaltyprogram.png"
                            width={735}
                            height={660}
                            alt="Loyalty Program"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">Loyalty Programs</h2>
                        <p className="text-gray-700 mb-5">
                            Engage customers with personalized rewards, track participation, and analyze behavior to fine-tune offers. Enhance customer retention and turn every purchase into an opportunity to strengthen brand loyalty.
                        </p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-10 items-center">
                    <div className="md:w-1/2 md:pr-8 mt-10 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2 text-[#475467]">Digital Storefront</h2>
                        <p className="text-gray-700 mb-5">
                            Seamlessly extend your physical storefront into the digital realm with our Digital Store Front solution. Designed for omni-channel excellence, it offers an effortless way for retailers to expand online, maintaining brand consistency and customer engagement across all platforms.
                        </p>
                        <button className="bg-green w-full sm:w-[213px] h-[45px] sm:h-[55px] flex justify-center items-center rounded-full text-white text-sm font-normal transition-all duration-200 ease-in hover:shadow-lg">
                            Learn More
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src="/images/digitalstore.png"
                            width={735}
                            height={660}
                            alt="Digital Storefront"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elevate;






