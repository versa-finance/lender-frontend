import React from 'react';
import {MINI_DRAWER} from "constants/ActionTypes";
import LOGO from 'assets/images/logoblue.png';

const SidenavLogo = ({drawerType}) => {

    const showMini = drawerType.includes(MINI_DRAWER);

    return (
        <div className="sidebar-header d-flex align-items-center">
            {showMini ?
                <div className="mini-logo">
                    <img className="mini-logo-img" alt='...' src={LOGO}/>
                    <img className="mini-logo-img-hover" alt='...' src={LOGO}/>
                </div> : <img alt='...' src={LOGO}/>
            }
        </div>
    );
};

export default SidenavLogo;
