import Image from "next/image";
const WhyOptSection = (data) => {
    return (
        <>
            <div className="container mx-auto bg-[#FFF3EA] rounded-[20px] h-[550px] md:h-[600px] lg:h-[600px] relative mt-10">
                <div className="flex justify-center absolute top-[-80px] left-0 right-0 md:left-[85px] md:right-[85px] sm:left-[5px] sm:right-[5px]">
                    <img
                        src="/images/newaboutwhy.png"
                        className="w-full h-auto md:w-auto"
                        alt="Management img"
                    />
                </div>
                <div className="custom-mt-640-to-340 text-center flex justify-center absolute top-0 lg:top-[25em] md:top-[15em] sm:top-[14em] left-0 right-0 md:left-[55px] md:right-[55px] sm:left-[5px] sm:right-[5px]">
                    <div className="lg:flex justify-between w-full">
                        {/* Card 1 */}
                        <div className="mb-4 md:mb-0 md:mr-4 lg:w-[33%]">
                            <div className="flex items-center">
                                <Image
                                    src="/images/icon2.png"
                                    alt="image"
                                    height={62}
                                    width={62}
                                    className="mr-2"
                                />
                                <span className="font-inter text-[22px] text-[#101828] font-[700]">
                                    {data?.data?.content?.title}
                                </span>
                            </div>
                            <span className="font-inter text-[16px] text-[#475467]">
                                {data?.data?.content?.subtitle}
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="mb-4 md:mb-0 md:mr-4 lg:w-[33%]">
                            <div className="flex items-center">
                                <Image
                                    src="/images/icon 3.png"
                                    alt="image"
                                    height={62}
                                    width={62}
                                    className="mr-2"
                                />
                                <span className="font-inter text-[22px] text-[#101828] font-[700]">
                                    {data?.data?.content?.title}
                                </span>
                            </div>
                            <span className="font-inter text-[16px] text-[#475467]">
                                {data?.data?.content?.subtitle}
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div class="lg:w-[33%]">
                            <div className="flex items-center">
                                <Image
                                    src="/images/icon1.png"
                                    alt="image"
                                    height={62}
                                    width={62}
                                    className="mr-2"
                                />
                                <span className="font-inter text-[22px] text-[#101828] font-[700]">
                                    {data?.data?.content?.title}
                                </span>
                            </div>
                            <span className="font-inter text-[16px] text-[#475467]">
                                {data?.data?.content?.subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-[#475467] font-inter text-[26px] font-light leading-[37px] mt-10 relative">
                <div className="text-center text-[#475467] font-inter text-[26px] font-light leading-[37px] mt-10">
                    {data?.data?.content?.subtitle}
                </div>
                <div className="ml-[10em] sm:ml-[26em]  mt-[40px] absolute  ">
                    <Image src="/images/cw-bglogo.png" height={200} width={200} />
                </div>
            </div>
        </>
    );
};

export default WhyOptSection;