import React from 'react';

type IButton = {
  className?: string;
  text: string | JSX.Element;
  ghost?: boolean;
  active?: boolean;
  primary?: boolean;
  icon?: boolean;
  link?: boolean;
  children?: JSX.Element;
  onClick?: () => void;
};

const Button = ({
  className,
  text,
  ghost,
  active,
  primary,
  icon,
  link,
  children,
  onClick,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${ghost && 'btn-ghost'} ${
        active && 'btn-active'
      } text-left btn-sm  md:btn-md font-medium capitalize rounded-full transition-all w-fit  ${
        primary &&
        'bg-primary text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary rounded-full '
      } ${icon && 'btn-circle'} ${link && 'btn-link'} `}
    >
      {children} {text}
    </button>
  );
};

export default Button;
