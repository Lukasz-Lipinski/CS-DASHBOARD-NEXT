import { FC } from 'react';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: FC<LayoutProps> = ({
  children,
}) => {
  return (
    <div className='d-flex justify-content-center container-fluid align-items-center'>
      {children}
    </div>
  );
};

export default Layout;
