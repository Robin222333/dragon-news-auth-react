import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import png1 from '../../../assets/1.png'
import png2 from '../../../assets/2.png'
import png3 from '../../../assets/3.png'
import { FaWpforms } from 'react-icons/fa';
import moment from 'moment'



const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className='px-3 mb-4 font-bold'>All Category</h2>
            <div className='grid grid-cols-1 px-10 space-y-3'>
            {
                categories.map(category => <Link key={category.id}>{category.name}</Link>)
            }
            </div>

            {/* more news  */}

            <div>
                <div className='px-4 py-3'>
                    <img src={png1} alt="" />
                    <p className='font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <FaWpforms></FaWpforms>
                    <p>{moment().format(" MMM D, YYYY")}</p>
                    </div>
                </div>
                <div className='px-4 py-3'>
                    <img src={png2} alt="" />
                    <p className='font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <FaWpforms></FaWpforms>
                    <p>{moment().format(" MMM D, YYYY")}</p>
                    </div>
                </div>
                <div className='px-4 py-3'>
                    <img src={png3} alt="" />
                    <p className='font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <FaWpforms></FaWpforms>
                    <p>{moment().format(" MMM D, YYYY")}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftSideNav;