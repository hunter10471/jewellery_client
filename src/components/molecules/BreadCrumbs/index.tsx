import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {
  const currentLocation = window.location.href.split('//')[1].split('/');
  const navigate = useNavigate();
  return (
    <div className='text-sm breadcrumbs mb-10'>
      <ul>
        {currentLocation.map((link, index) => {
          return (
            <li
              className={
                currentLocation[currentLocation.length - 1] === link
                  ? 'font-bold'
                  : ''
              }
              key={index}
              onClick={() =>
                navigate(currentLocation.slice(0, index + 1).join('/'))
              }
            >
              <a href={currentLocation.slice(0, index + 1).join('/')}>
                {link === 'localhost:3000' ? 'Home' : link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
