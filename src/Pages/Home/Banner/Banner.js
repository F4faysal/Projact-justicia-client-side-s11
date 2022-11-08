import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';

import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2,
        titel : "Introduce with LaSight"
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3,
        titel : "Client Focused"
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1,
        titel : "Every New Time Will Give its Law"

    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;