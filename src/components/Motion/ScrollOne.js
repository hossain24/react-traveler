import React from 'react';
import './ScrollOne.css';
import imageOne from '../../images/t2.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollOne = () => {

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
            duration: 5.00,
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
        <div>
            <div className="Container">
                <div className="ColumnLeft gs_reveal gs_reveal_fromLeft">
                    <img src={imageOne} alt="nature" />
                </div>
                <div className="ColumnRight">
                    <h1 className="gs_reveal gs_reveal_fromRight">Web Technologies are used</h1>
                    <ul>
                        <li className="gs_reveal gs_reveal_fromRight">HTML, CSS, JavaScript</li>
                        <li className="gs_reveal gs_reveal_fromRight">ReactJS, Styled Components</li>
                        <li className="gs_reveal gs_reveal_fromRight">GSAP, ScrollTrigger, FramerMotion</li>
                        <li className="gs_reveal gs_reveal_fromRight">& many more to add on</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ScrollOne;
