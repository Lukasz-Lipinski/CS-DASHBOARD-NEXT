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
    <div className='d-flex flex-column'>
      <LoginPanel panelType={panelType} />
      <p className='text-center'>
        <a
          className='btn btn-link'
          onClick={togglePanel}
        >
          Click here
        </a>
        to {panelType} !
      </p>
      <div></div>
    </div>
  );
};

export default Home;
