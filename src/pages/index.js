import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimationOne from '../components/Animation/AnimationOne';
import { AnimationData } from '../components/Animation/AnimationData';
import Slider from '../components/Slider/Slider';
import { SliderData } from '../components/Slider/SliderData';
import Gallery from '../components/Gallery/Gallery';
import ScrollOne from '../components/Motion/ScrollOne';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Gallery />
            <ScrollOne />
            <AnimationOne {...AnimationData} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Slider slides={SliderData} />
            <Services />
            <Footer />
        </>
    );
}

export default Home;