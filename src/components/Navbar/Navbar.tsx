import React from 'react';
import NavbarStyles from './Navbar.module.css';
import { Typography } from "../Typography";

export interface NavlinkProps {
    href: string;
    text: string;
    side?: 'left' | 'right';
}

export interface NavbarProps {
    links: NavlinkProps[];
    logo: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Navbar: React.FC<NavbarProps> = ({ links, logo, style, className }) => {

    let classes: string[] = [NavbarStyles['gb-navbar']];

    if(className){
        classes.push(className);
    }

    return (
        <div className={NavbarStyles["gb-navbar__wrapper"]}>
            <nav className={classes.join(' ')}>
                <div className={NavbarStyles["gb-navbar__logo"]}>
                    {logo}
                </div>
                <ul className={NavbarStyles["gb-navbar__links"]}>
                    {links.map((link, index) => (
                        <li key={index} className={NavbarStyles["gb-navbar__link"]}>
                            <Typography.Link href={link.href} className="text-black">{link.text}</Typography.Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;