import type { NextPage } from 'next';
import { useState } from 'react';
import {
  LoginPanel,
  LoginPanelTypes,
} from '../components/Panel';

const Home: NextPage = () => {
  const [panelType, setPanelType] =
    useState<LoginPanelTypes>('signin');

  const togglePanel = () => {
    setPanelType((value) => {
      if (value === 'signin') return 'signup';
      return 'signin';
    });
  };

  return (
    <div className='d-flex align-items-center vh-100'>
      <div>
        <LoginPanel panelType={panelType} />
        <p className='d-flex justify-content-center align-items-center p-2'>
          <a
            className='btn btn-link'
            onClick={togglePanel}
          >
            Click here
          </a>
          to {panelType} !
        </p>
      </div>
    </div>
  );
};

export default Home;
