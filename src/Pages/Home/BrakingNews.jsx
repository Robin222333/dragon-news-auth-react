import React from 'react';
import Marquee from "react-fast-marquee";
const BrakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn btn-secondary">Braking News</button>
            <Marquee speed={200}>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;