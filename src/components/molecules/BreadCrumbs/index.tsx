import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IBreadCrumbsProps {
  title?: string;
}

const BreadCrumbs = ({ title }: IBreadCrumbsProps) => {
  const currentLocation = window.location.href.split('//')[1].split('/');
  const navigate = useNavigate();
  const isProduct = (link: string) => {
    return parseInt(link) ? title : link;
  };
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
                {link === 'localhost:3000' ? 'Home' : isProduct(link)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
