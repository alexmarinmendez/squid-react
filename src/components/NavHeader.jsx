import React from 'react';
import { GiDogHouse } from 'react-icons/gi';

function NavHeader(props) {
    return (
        <header id="header-home">
            <div className="container-header">
                <div className="logo-title">
                    <div id="logo"><GiDogHouse /></div>
                    <h4>The Squid Game API Web App</h4>
                </div>
            </div>
        </header>
    )
};

export default NavHeader;