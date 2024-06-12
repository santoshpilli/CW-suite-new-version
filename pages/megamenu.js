import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuData = [
    {
        title: "Fashion",
        slug: "/fashion",
        children: [
            {
                title: "mens",
                slug: "/fashion/mens",
                subchildren: [
                    {
                        title: "Clothing",
                        slug: "/fashion/mens/clothing",
                    },
                    {
                        title: "Topwear",
                        slug: "/fashion/mens/Topwear",
                    },
                    {
                        title: "T-shirts",
                        slug: "/fashion/mens/T-shirts",
                    },
                    {
                        title: "Formal-shirts",
                        slug: "/fashion/mens/Formal-shirts",
                    },
                    {
                        title: "Jeans",
                        slug: "/fashion/mens/jeans",
                    },
                    {
                        title: "Trousers",
                        slug: "/fashion/mens/Trousers",
                    },
                ],
            },
            {
                title: "womens",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Ethenic wear",
                        slug: "/parent-1/child-2/ethenic wear",
                    },
                    {
                        title: "sarees",
                        slug: "/parent-1/child-2/Sarees",
                    },
                    {
                        title: "Gowns",
                        slug: "/parent-1/child-2/Gowns",
                    },
                    {
                        title: "Dress Materials",
                        slug: "/parent-1/child-2/Dress Materials",
                    },
                ],
            },
        ],
    },
    {
        title: "Electronics",
        slug: "/electronics",
        children: [
            {
                title: "Mobiles",
                slug: "/parent-2/child-3",
                subchildren: [
                    {
                        title: "Realme",
                        slug: "/parent-2/child-4/Realme",
                    },
                    {
                        title: "Oppo",
                        slug: "/parent-2/child-4/Oppo",
                    },
                    {
                        title: "Vivo",
                        slug: "/parent-2/child-4/Vivo",
                    },
                    {
                        title: "Apple",
                        slug: "/parent-2/child-4/Apple",
                    },
                ],
            },
            {
                title: "Laptops",
                slug: "/parent-2/child-4",
                subchildren: [
                    {
                        title: "Subchild 5",
                        slug: "/parent-2/child-4/subchild-5",
                    },
                    {
                        title: "Subchild 6",
                        slug: "/parent-2/child-4/subchild-6",
                    },
                ],
            },
            {
                title: "Smart Watches",
                slug: "/parent-2/child-4",
                subchildren: [
                    {
                        title: "Subchild 5",
                        slug: "/parent-2/child-4/subchild-5",
                    },
                    {
                        title: "Subchild 6",
                        slug: "/parent-2/child-4/subchild-6",
                    },
                ],
            },
            {
                title: "Cameras",
                slug: "/parent-2/child-4",
                subchildren: [
                    {
                        title: "Subchild 5",
                        slug: "/parent-2/child-4/subchild-5",
                    },
                    {
                        title: "Subchild 6",
                        slug: "/parent-2/child-4/subchild-6",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
    {
        title: "Parent 1",
        slug: "/parent-1",
        children: [
            {
                title: "Child 1",
                slug: "/parent-1/child-1",
                subchildren: [
                    {
                        title: "Subchild 1",
                        slug: "/parent-1/child-1/subchild-1",
                    },
                    {
                        title: "Subchild 2",
                        slug: "/parent-1/child-1/subchild-2",
                    },
                ],
            },
            {
                title: "Child 2",
                slug: "/parent-1/child-2",
                subchildren: [
                    {
                        title: "Subchild 3",
                        slug: "/parent-1/child-2/subchild-3",
                    },
                    {
                        title: "Subchild 4",
                        slug: "/parent-1/child-2/subchild-4",
                    },
                ],
            },
        ],
    },
];

const Navbar = ({ setSidebarOpen }) => {
    const [activeParent, setActiveParent] = useState(null);
    const [activeChild, setActiveChild] = useState(null);

    const handleParentMouseEnter = (parent) => {
        setActiveParent(parent);
    };

    const handleParentMouseLeave = () => {
        setActiveParent(null);
    };

    const handleChildMouseEnter = (child) => {
        setActiveChild(child);
    };

    const handleChildMouseLeave = () => {
        setActiveChild(null);
    };

    return (
        <>
            <nav className="transition-all duration-500 ease-linear px-3 xl:px-10 flex items-center bg-white py-[18px] justify-between sticky-bar top-0 sticky z-30 shadow-sm">
                <div className="max-w-[120px] sm:max-w-[170px]">
                    {/* <Link href="/">
                        <Image src="/images/cwsuite-logo.png" width={160} height={31} alt="LOGO" />
                    </Link> */}
                </div>

                <ul className="ff-Inter text-xs hidden lg:flex items-center justify-between text-darkBlack">
                    {menuData.map((parent, index) => (
                        <li key={index} className="mx-5 relative" onMouseEnter={() => handleParentMouseEnter(parent)} onMouseLeave={handleParentMouseLeave}>
                            <span>{parent.title}</span>

                            {activeParent === parent && parent.children && (
                                <div className="absolute left-0 flex flex-col xl:flex-row py-3 bg-white shadow rounded w-[240px]">
                                    <ul className="flex flex-col items-start w-full">
                                        {parent.children.map((child, childIndex) => (
                                            <li key={childIndex} className="footer-text text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2 relative" onMouseEnter={() => handleChildMouseEnter(child)} onMouseLeave={handleChildMouseLeave}>
                                                <span>{child.title}</span>

                                                {activeChild === child && child.subchildren && (
                                                    <div className="absolute left-full top-0 flex flex-col py-3 bg-white shadow rounded">
                                                        <ul className="flex flex-col items-start">
                                                            {child.subchildren.map((subchild, subchildIndex) => (
                                                                <li key={subchildIndex} className="footer-text text-[101828] hover:bg-[#D9D9D9] w-full px-4 py-2">
                                                                    <span>{subchild.title}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center ff-Inter">
                    {/* Additional code for user sign-in, sign-up buttons, and sidebar toggle */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;












































