import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Adventure</FooterLinkTitle>
                            <FooterLink to="/signin">About</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Gallery</FooterLink>
                            <FooterLink to="/signin">Explore</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Hiking</FooterLinkTitle>
                            <FooterLink to="/signin">About</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Gallery</FooterLink>
                            <FooterLink to="/signin">Explore</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Camping</FooterLinkTitle>
                            <FooterLink to="/signin">About</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Gallery</FooterLink>
                            <FooterLink to="/signin">Explore</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Traveling</FooterLinkTitle>
                            <FooterLink to="/signin">About</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Gallery</FooterLink>
                            <FooterLink to="/signin">Explore</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>traveler</SocialLogo>
                        <WebsiteRights>traveler © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;