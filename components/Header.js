import React from 'react';
import NextLink from 'next/link';
import { Navigation, LanguageSwitcher } from '.';

const Header = ({ menu, altLangs }) => ( <
    >
    <
    header >
    <
    div className = "menu" >
    <
    NextLink href = { '/' }
    passHref >
    logo <
    /NextLink> < /
    div > <
    div className = "menu" >
    <
    ul >
    <
    Navigation menu = { menu }
    /> <
    LanguageSwitcher altLangs = { altLangs }
    /> < /
    ul > <
    /div> < /
    header > <
    />
);

export default Header;