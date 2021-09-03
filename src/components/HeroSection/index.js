import React, { useState } from 'react';
import Video from '../../videos/video5.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Nature</HeroH1>
                <HeroP>
                    Go Green Save The Nature
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Discover {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
