import React from 'react';
import Header from '../Shaired/Header/Header';
import Navbar from '../Shaired/Navbar/Navbar';
import LeftSideNav from '../Shaired/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shaired/RightSideNav/RightSideNav';
import BrakingNews from './BrakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCards from './NewsCards';

const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl">This is home</h2>
            {/* this is grid of news  */}

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='text-3xl font-bold md:col-span-2 border'>
                    {
                        news.map(aNews => <NewsCards
                        key={aNews._id}
                        aNews ={aNews}
                        ></NewsCards>)
                    }
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default Home;