import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';

export enum ToastType {
  error = 'error',
  success = 'success',
  info = 'info',
}

interface IToastProps {
  text: string;
  type: ToastType;
  className?: string;
}

const Toast = ({ text, type, className }: IToastProps) => {
  return (
    <div
      className={`toast transition-all duration-300 ease-in-out ${className} `}
    >
      <div
        className={`alert ${
          type === ToastType.info
            ? 'alert-info'
            : type === ToastType.success
            ? 'alert-success'
            : 'alert-info'
        }  alert-info `}
      >
        <div>
          <span className='flex gap-2 items-center '>
            {' '}
            {type === ToastType.success ? (
              <BsFillCheckCircleFill fontSize={25} />
            ) : type === ToastType.error ? (
              <MdError fontSize={25} />
            ) : (
              <AiFillInfoCircle fontSize={25} />
            )}{' '}
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
