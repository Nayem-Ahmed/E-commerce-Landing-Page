import React from 'react';
import Banner from './Banner';
import Products from './Products';
import AboutUs from './AboutUs ';
import NewsletterSignup from './NewsletterSignup';
 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <AboutUs></AboutUs>
            <NewsletterSignup></NewsletterSignup>
         </div>
    );
};

export default Home;