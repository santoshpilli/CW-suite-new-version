'use client'
import React from 'react';
import Hero from "../../components/sections/HeroSection"
import FeaturesSection from '../../components/sections/FeaturesSection'
import TalkUs from '../../components/sections/ContactFormSection';
import Faq from "../../components/sections/Faq/Faq";
import HappyUsers from "../../components/Home/HappyUsers";
import Platfom from "../../components/Home/Platfom";
import RightImgLefttext from '../sections/RightImgLefttext';
import LeftImgRighttext from '../sections/LeftImgRighttext';
import FeaturesSectionRightText from '../sections/FeatureSectionRightText';
import RoundImgSection from '../sections/RoundImgSection';
import CardImgSection from '../sections/CardImgSection';
import ThreeImgSection from '../sections/ThreeImgSection';
import BgColorImage from '../sections/BgColorImage';
// import CardImgSection from '../sections/CardImgSection';
import CardMergeSection from '../sections/CardMergeSection';
import FourCardSection from '../sections/FourCardSection';
import DescriptionSection from '../sections/DescriptionSection';
import WhyOptSection from '../sections/WhyOptSection';
import SliderSection from '../sections/SliderSection';



const RenderSections = ({ data }) => {


    const finalData = JSON.parse(data.content)

    const renderSectionComponent = (section) => {
        switch (section.sectionType) {
            case 'HeroSection':
                return <Hero data={section} />;
            case 'FeaturesSection':
                return <FeaturesSection data={section} />;
            case 'RightImgLeftText':
                return <RightImgLefttext data={section} />;
            case 'LeftImageRightText':
                return <LeftImgRighttext data={section} />;
            case 'RoundImgSection':
                return <RoundImgSection data={section} />;
            case 'CardImgSection':
                return <CardImgSection data={section} />;
            case 'ThreeImgSection':
                return <ThreeImgSection data={section} />;
            case 'BgColorImage':
                return <BgColorImage data={section} />;
            case 'CardMergeSection':
                return <CardMergeSection data={section} />;
            case 'FourCardSection':
                return <FourCardSection data={section} />;
            case 'FeatureSectionRightText':
                return <FeaturesSectionRightText data={section} />;
            case 'DescriptionSection':
                return <DescriptionSection data={section} />;
            case 'WhyOptSection':
                return <WhyOptSection data={section} />;
            case 'SliderSection':
                return <SliderSection data={section} />;

            case 'ContactFormSection':
                return <TalkUs data={section} pageName={finalData.pageTitle} />;
            case 'FaqSection':
                return <Faq data={section} />;
            case 'HappyUsersSection':
                return <HappyUsers data={section} />;
            case 'PlatfomSection':
                return <Platfom data={section} />;
            default:
                return null;
        }
    };

    return (
        <>
            {finalData?.sections?.map((section, index) => (
                <React.Fragment key={index}>
                    {renderSectionComponent(section)}
                </React.Fragment>
            ))}

        </>
    );
}

export default RenderSections;