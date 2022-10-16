import React from 'react';

type IButton = {
  className?: string;
  text: string | JSX.Element;
  ghost?: boolean;
  active?: boolean;
  primary?: boolean;
};

const Button = ({ className, text, ghost, active, primary }: IButton) => {
  return (
    <button
      className={`${className} ${ghost && 'btn-ghost'} ${
        active && 'btn-active'
      } btn text-base font-medium capitalize ${
        primary &&
        'bg-primary text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary rounded-full '
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
