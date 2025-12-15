import React from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import { NavLink } from 'react-router';
import { GoHomeFill } from "react-icons/go";

const DashboardLink = ({children,to}) => {
    return (
            <li >
          <NavLink to={to} className={({isActive})=> isActive ? 'bg-secondary' : "is-drawer-close:tooltip tooltip-secondary is-drawer-close:tooltip-right flex items-center  "} data-tip={children}>
            {/* Home icon */}
          {
            to==='/' &&   <GoHomeFill className='text-[22px]' />||

            to==='/dashboard/club-requests' && < FaUserPlus className='text-[22px]' />
          }
        
            <span className="is-drawer-close:hidden whitespace-nowrap">{children}</span>
          </NavLink>
        </li>
    );
};

export default DashboardLink;