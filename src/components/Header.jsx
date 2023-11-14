import signIn from '../assets/sign-in.png';
import cart from '../assets/cart.png';
import menu from '../assets/menu.png';

const Header = () => {
    return (
        <div className="w-11/12 m-auto mt-5 flex justify-between items-center md:w-10/12">
            <img src="https://goodsmileshop.com/medias/sys_master/images/images/h15/h37/8880698064926.png" alt="logo" />
            <div className='flex'>
                <img src={signIn} alt='sign in' className='w-6 mr-5 md:mr-7'/>
                <img src={cart} alt='cart' className='w-6 mr-5 md:mr-7'/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nO3WsQkAMAwDQe2/dALuXIVUBnMHGkDdJwBAOUuWNUcAAOBpulplfGQ8AAC/pvNbxkfGA0CaC2n/KuSsP4fKAAAAAElFTkSuQmCC" alt="menu" className="w-5"/>
            </div>
        </div>
    )
}

export default Header;