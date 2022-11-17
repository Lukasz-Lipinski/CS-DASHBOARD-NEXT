import { FC } from 'react';
import { Navigation } from '../../Navigation';

interface DashboardLayoutProps {
  children: React.ReactElement;
}

const DashboardLayout: FC<
  DashboardLayoutProps
> = ({ children }) => {
  return (
    <div className='container-fluid'>
      <Navigation />
      <main className='container justify-content-center d-flex'>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
