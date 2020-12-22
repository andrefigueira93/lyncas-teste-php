import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export interface IMenuLink {
    url: string;
    text: string;
}

const MenuLink: React.FC<IMenuLink> = ({url, text}) => {

    const {pathname} = useLocation();

    return (
    <Link to={url} className={`${pathname === url && 'bg-gray-900 '} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition block`}>
        {text}
    </Link>
    )
}

export default MenuLink;