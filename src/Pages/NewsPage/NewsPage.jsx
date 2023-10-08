import React from 'react';
import { useParams } from 'react-router-dom';
import RightSideNav from '../Shaired/RightSideNav/RightSideNav';
import Navbar from '../Shaired/Navbar/Navbar';

const NewsPage = () => {
    const {_id} = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <h1>News Details</h1>
                    {_id}
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;