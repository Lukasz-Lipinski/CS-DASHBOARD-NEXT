import { FC } from 'react';

interface ErrorMsgProps {
  content: string;
}

const ErrorMsg: FC<ErrorMsgProps> = ({
  content,
}) => {
  return (
    <div className='alert-danger'>{content}</div>
  );
};

export default ErrorMsg;
