import React from 'react';
import Icon1 from '../../images/t4.svg';
import Icon2 from '../../images/t2.svg';
import Icon3 from '../../images/t3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Explore</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Traveler</ServicesH2>
                    <ServicesP>Travel through the World</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Traveler</ServicesH2>
                    <ServicesP>Travel through the World.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Traveler</ServicesH2>
                    <ServicesP>Travel through the World.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;
