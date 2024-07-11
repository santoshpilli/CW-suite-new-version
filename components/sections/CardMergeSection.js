

// import Image from 'next/image';

// function FashionSection({ data }) {
//     return (


//         <section className="bg-skyblue z-0 py-8 lg:py-20">
//         <div className="container mx-auto px-4 sm:px-5">
//             <div className="flex justify-center">
//                 <h2 className="ff-Inter font-bold leading-[30px] sm:leading-[45px] 3xl:leading-[64px] mx-4 sm:mx-0 md:leading-[50px] text-xl sm:text-2xl 3xl:text-[48px] text-darkBlack max-w-[100%] sm:max-w-[725px] text-center">
//                     {data.content.title}
//                 </h2>
//             </div>
//             <div className="flex justify-center mt-4">
//                 <p className="ff-inter font-normal text-md text-lightgrey max-w-[100%] text-center">
//                     {data.content.subtitle}
//                 </p>
//             </div>
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 ml-[1.2rem] xl:grid-cols-3 gap-4 sm:gap-6 3xl:gap-8 mt-4 sm:mt-8 3xl:mt-12 pb-4 sm:pb-8 3xl:pb-12">
//                 {data.content.cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className={`bg-${card.styles.backgroundColor} rounded-[16px] z-0 hover:scale-105 transition-all ease-in hover:duration-200 relative`}
//                         style={{
//                             maxWidth: card.styles.maxWidth,
//                             marginTop: card.styles.marginTop,
//                             padding: card.styles.padding,
//                             backgroundColor: card.styles.backgroundColor
//                         }}
//                     >
//                         <div className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-4">
//                             {card.iconUrl && (
//                                 <Image
//                                     src={card.iconUrl}
//                                     width={64}
//                                     height={64}
//                                     alt="management img"
//                                     className="rounded-full"
//                                 />
//                             )}
//                             <h3 className="ff-Inter font-bold text-lg sm:text-xl text-darkBlack mt-4 sm:mt-6 leading-[24px] text-center sm:text-left">
//                                 {card.heading}
//                             </h3>
//                             <p className="ff-inter font-normal text-base text-lightgrey mt-2 sm:mt-4 text-center sm:text-left">
//                                 {card.description}
//                             </p>
//                             <div className="mt-[6rem]">
//                             {card.url &&  (
//                                 <Image
//                                     className="w-full absolute left-0 px-4 -bottom-6 sm:-bottom-8 rounded-[16px] object-cover"
//                                     src={card.url}
//                                     width={140}
//                                     height={140}
//                                     alt="management img"
//                                 />
//                             )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>




//     );
// }

// export default FashionSection;


import Image from 'next/image';

function FashionSection({ data }) {
    return (

        <section className="bg-skyblue z-0 py-8 lg:py-20">
            <div className="container mx-auto px-4 sm:px-5">
                <div className="flex justify-center">
                    <h2 className="ff-Inter font-bold leading-[30px] sm:leading-[45px] 3xl:leading-[64px] mx-4 sm:mx-0 md:leading-[50px] text-xl sm:text-2xl 3xl:text-[48px] text-darkBlack max-w-[100%] sm:max-w-[725px] text-center">
                        {data.content.title}
                    </h2>
                </div>
                <div className="flex justify-center mt-4">
                    <p className="ff-inter font-normal text-md text-lightgrey max-w-[100%] text-center">
                        {data.content.subtitle}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 ml-[1.2rem] xl:grid-cols-3 gap-4 sm:gap-6 3xl:gap-8 mt-4 sm:mt-8 3xl:mt-12 pb-4 sm:pb-8 3xl:pb-12">
                    {data.content.cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-${card.styles.backgroundColor} rounded-[16px] z-0 hover:scale-105 transition-all ease-in hover:duration-200 relative`}
                            style={{
                                maxWidth: card.styles.maxWidth,
                                marginTop: card.styles.marginTop,
                                padding: card.styles.padding,
                                backgroundColor: card.styles.backgroundColor
                            }}
                        >
                            <div className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-4">
                                {card.iconUrl && (
                                    <Image
                                        src={card.iconUrl}
                                        width={64}
                                        height={64}
                                        alt="management img"
                                        className="rounded-full"
                                    />
                                )}
                                <h3 className="ff-Inter font-bold text-lg sm:text-xl text-darkBlack mt-4 sm:mt-6 leading-[24px] text-center sm:text-left">
                                    {card.heading}
                                </h3>
                                <p className="ff-inter font-normal text-base text-lightgrey mt-2 sm:mt-4 text-center sm:text-left">
                                    {card.description}
                                </p>
                                <div className="mt-[6rem]">
                                    {card.url && (
                                        <Image
                                            className="w-full absolute left-0 px-4 -bottom-6 sm:-bottom-8 rounded-[16px] object-cover"
                                            src={card.url}
                                            width={140}
                                            height={140}
                                            alt="management img"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default FashionSection;

