import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   line-height: 1.4;
   padding: 1rem 2rem;
   order: ${({ reverse }) => (reverse ? '2' : '1')};

   h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #1b2b10;
}

    p {
    margin-bottom: 2rem;
    color: #5f3c1b;
}
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`;

const AnimationOne = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image
}) => {

    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
            duration: 2.00,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () { animateFrom(elem) },
                onEnterBack: function () { animateFrom(elem, -1) },
                onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
            });
        });
    });

    return (
        <Section>
            <Container>
                <ColumnLeft >
                    <h1 className="gs_reveal gs_reveal_fromLeft">{heading}</h1>
                    <p className="gs_reveal gs_reveal_fromLeft">{paragraphOne}</p>
                    <p className="gs_reveal gs_reveal_fromLeft">{paragraphTwo}</p>
                    <Button className="gs_reveal gs_reveal_fromLeft" to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse} >
                    <img className="gs_reveal gs_reveal_fromRight" src={image} alt='book'></img>
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default AnimationOne;
