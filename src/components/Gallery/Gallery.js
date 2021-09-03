import React from 'react';
import './Gallery.css';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    return (
        <div className='cards gallery'>
            <div className="headline">
                <h1>Explore The Nature</h1>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <GalleryItem
                            src='images/t11.jpg'
                            text='..............................................'
                            /* label='Adventure' */
                            path='/gallerypage'
                        />
                        <GalleryItem
                            src='images/t14.jpg'
                            text='..............................................'
                            /* label='Adventure' */
                            path='/gallerypage'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <GalleryItem
                            src='images/t4.jpg'
                            text='...............................................'
                            /* label='Adventure' */
                            path='/gallerypage'
                        />
                        <GalleryItem
                            src='images/t6.jpg'
                            text='...............................................'
                            /*  label='Adventure' */
                            path='/gallerypage'
                        />
                        <GalleryItem
                            src='images/t7.jpg'
                            text='................................................'
                            /* label='Adventure' */
                            path='/gallerypage'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
