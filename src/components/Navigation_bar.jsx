import React from 'react';

const Nav_Bar = () => {
    return (
        <div className='container nav_bar'>
            <h2 className='title'>
                <a href='/'>Antares Aerospace</a>
            </h2>
            <div className='list'>
                <a href='/calculator'>Supersonic Nozzle flow</a>
                <a href='https://www.facebook.com/AntaresSpaceTeam/?locale=es_LA'>About</a>
                <a href='https://github.com/Fernu292/Antares-Math'>Code</a>
            </div>
        </div>
    );
};

export default Nav_Bar;