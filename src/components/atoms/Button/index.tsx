import React from 'react';

type IButton = {
  className?: string;
  text: string | JSX.Element;
  ghost?: boolean;
  active?: boolean;
  primary?: boolean;
  icon?: boolean;
  link?: boolean;
};

const Button = ({
  className,
  text,
  ghost,
  active,
  primary,
  icon,
  link,
}: IButton) => {
  return (
    <button
      className={`${className} ${ghost && 'btn-ghost'} ${
        active && 'btn-active'
      } btn-sm text-left md:btn-md text-xs sm:text-sm lg:text-base font-medium capitalize rounded-full ${
        primary &&
        'bg-primary text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary rounded-full '
      } ${icon && 'btn-circle'} ${link && 'btn-link'} `}
    >
      {text}
    </button>
  );
};

export default Button;
