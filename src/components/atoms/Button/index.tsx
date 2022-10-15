import React from 'react';

type IButton = {
  className?: string;
  text: string | JSX.Element;
  ghost?: boolean;
  active?: boolean;
};

const Button = ({ className, text, ghost, active }: IButton) => {
  return (
    <button
      className={`${className} ${ghost && 'btn-ghost'} ${
        active && 'btn-active'
      } btn text-base font-medium capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
