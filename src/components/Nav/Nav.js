import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
    const matches = useMediaQuery('(min-width:700px)');
    
    return (
        matches ? <DesktopNav /> : <MobileNav />
    );
}

export default Nav;