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
          console.log(currentLocation.slice(0, index + 1).join('/'));
          return (
            <li
              className={`
                  ${
                    currentLocation[currentLocation.length - 1] === link
                      ? 'font-bold'
                      : ''
                  } cursor-pointer hover:underline `}
              key={index}
              onClick={() =>
                navigate(currentLocation.slice(0, index + 1).join('/'), {
                  replace: true,
                })
              }
            >
              {link === 'localhost:3000' ? 'Home' : isProduct(link)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
