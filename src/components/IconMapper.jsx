import React from 'react';
import {
    MdVolunteerActivism,
    MdDiversity3,
    MdHandshake,
    MdLocationOn,
    MdCall,
    MdMail,
    MdArrowForward
} from 'react-icons/md';

const iconMap = {
    'volunteer_activism': MdVolunteerActivism,
    'diversity_3': MdDiversity3,
    'handshake': MdHandshake,
    'location_on': MdLocationOn,
    'call': MdCall,
    'mail': MdMail,
    'arrow_forward': MdArrowForward
};

const IconMapper = ({ iconName, className }) => {
    const IconComponent = iconMap[iconName];

    if (!IconComponent) {
        console.warn(`Icon "${iconName}" not found in IconMapper`);
        return null;
    }

    return <IconComponent className={className} />;
};

export default IconMapper;