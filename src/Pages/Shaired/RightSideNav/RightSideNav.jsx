
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import png1 from '../../../assets/qZone1.png'
import png2 from '../../../assets/qZone2.png'
import png3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3'>
                <h2 className="text-xl">Login With</h2>
                <button className="btn w-full">
                <FaGoogle></FaGoogle>
                   <span>Login With Google</span>
                </button>
                <button className="btn w-full">
                <FaInstagram></FaInstagram>
                   <span>Login With Instagram</span>
                </button>
            </div>

            <div className='p-4 space-y-3'>
                <h2 className="text-xl">Find Us On</h2>
                <button className="btn w-1/2 flex">
               <div className='flex gap-3 px-4 text-sm item-center'>
               <FaFacebook></FaFacebook>
                   <span>Facebook</span>
               </div>
                </button>
                <button className="btn w-1/2 flex">
               <div className='flex gap-3 px-4 text-sm item-center'>
               <FaTwitter></FaTwitter>
                   <span>Tweeter</span>
               </div>
                </button>
                <button className="btn w-1/2 flex">
                <div className='flex gap-3 px-4 text-sm item-center'>
                <FaInstagram></FaInstagram>
                   <span>Instagram</span>
                </div>
                </button>
            </div>

            {/* Q-Zone  */}

            <div>
                <img src={png1} alt="" />
                <img src={png2} alt="" />
                <img src={png3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;