import React from 'react';
import './GalleryTwo.css';
import GalleryItem from './GalleryItem';

const GalleryTwo = () => {


    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <GalleryItem
                            src='images/t5.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <GalleryItem
                            src='images/t6.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <GalleryItem
                            src='images/t7.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default GalleryTwo;
