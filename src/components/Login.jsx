import lock from '../assets/lock.png';
import user from '../assets/user.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import decoration from '../assets/Subtract.png';
import goBack from '../assets/go-back.png';
import { Link } from 'react-router-dom';
 

const Login = () => {
    return (
        <div className='w-[366px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <Link to={"/"}>
                <img src={goBack} alt='go back' className='w-5 mb-10 cursor-pointer'/>
            </Link>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-playfair'>WELCOME</h1>
                    <p className='text-sm pb-8'>We are glad to see you back with us</p>
                    <div className='flex items-center mb-5 bg-gray-100 py-2 rounded-lg'>
                        <img src={user} alt='user icon' className='mx-2 w-5'/>
                        <input type='text' placeholder='Username' className='bg-gray-100 text-xs flex-1 focus:outline-none'/> 
                    </div>
                    <div className='flex items-center mb-5 bg-gray-100 py-2 rounded-lg'>
                        <img src={lock} alt='password icon' className='mx-2 w-5'/>
                        <input type='text' placeholder='Password' className='bg-gray-100 text-xs flex-1 focus:outline-none'/>
                    </div>
                    <button className='bg-orange-400 text-white flex-1 py-3 rounded-lg text-xs hover:bg-orange-500'>NEXT</button>
                    <div className='relative'>
                        <p className='text-center py-4 text-xs'><span className='font-bold'>Login</span> with Others</p>
                        <img src={decoration} alt='decoration' className='absolute top-1/2 -translate-y-1/2'/>
                    </div>
                    <div className='flex items-center justify-center mb-4 border-2 rounded-lg py-2 hover:border-black cursor-pointer'>
                        <img src={google} alt='google icon' className='mr-2'/>
                        <p className='text-xs'>Login with <span className='font-bold'>google</span></p>
                    </div>
                    <div className='flex items-center justify-center border-2 rounded-lg py-2 hover:border-black cursor-pointer'>
                        <img src={facebook} alt='facebook icon' className='mr-2'/>
                        <p className='text-xs'>Login with <span className='font-bold'>facebook</span></p>
                    </div>
                </div>
            </div>
    )
}

export default Login;