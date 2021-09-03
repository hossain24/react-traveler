import React, { useRef, useEffect } from 'react';
import workout from "./images/t1.svg";
import greensocklogo from "./images/t2.svg";
import "./ScrollSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(
            el.querySelector(".first-paragraph"),
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 2
            }
        );
    }, []);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector("#gsap-logo"),
            {
                opacity: 0,
                scale: 0.2,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element.querySelector(".first"),
                    start: "top center",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }, []);

    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".line"), {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: element.querySelector(".third"),
                scrub: true,
                start: "top bottom",
                end: "top top"
            }
        });
    }, []);

    return (
        <div className="ScrollSection" ref={ref}>
            <div className="first">
                <h1>Explore</h1>
                <p className="first-paragraph">

                    <span role="img" aria-label="celebrating"></span>
                </p>
                <div className="logo-main">
                    <img src={workout} id="workout-logo" alt="workout" />
                </div>
            </div>

            <div className="second">
                <div className="logo-main">
                    <img src={greensocklogo} id="gsap-logo" alt="greensocklogo" />
                </div>
            </div>
        </div>
    )
}

export default ScrollSection
