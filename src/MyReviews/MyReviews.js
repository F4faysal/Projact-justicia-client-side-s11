import React from 'react';
import Review from '../Pages/Services/Details/Review';

const MyReviews = () => {
    return (
    <div className="h-[100]">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">Services Review</h1>
      </div>
      <div className="container mx-auto">
       <Review></Review>
      </div>
    </div>
    );
};

export default MyReviews;