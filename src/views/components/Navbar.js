
import React from 'react';
import {
	NavbarContainer,
	NavItem,
	Link,
	NavbarDropdown,
	Navbar as N,
} from 'uikit-react';

function Navbar() {
	return (
		<NavbarContainer> <N left> <NavItem> <Link>Dropdown</Link> <NavbarDropdown> <NavItem> <Link href='#'>Link</Link> </NavItem> </NavbarDropdown> </NavItem> <NavItem> <Link href='#'>Link</Link> </NavItem> <NavItem> <Link href='#'>Link</Link> </NavItem> </N> </NavbarContainer>
	);
}

export default Navbar;
