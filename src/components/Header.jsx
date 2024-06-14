import React from 'react';
import {useNavigate} from 'react-router-dom';
import Nav_Bar from './Navigation_bar';

const Header = ()=>{

    const navigate = useNavigate();

    return (
        <header className='hero'>
            <Nav_Bar/>

            <div className='superSonic_content container'>
                <h1>Supersonic nozzle flow</h1>
                <p>
                    This is a simple calculator that give you
                    all information necessary for 
                </p>
                <p>
                    study super 
                    sonic nozzle flow in rocket or jet motors
                </p>

                <button 
                    className='btn'
                    onClick={()=>navigate("/calculator")}
                >
                    Calculate
                </button>
            </div>

            <div className='blur'></div>

        </header>
    );
};

export default Header;