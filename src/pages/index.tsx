import type {
  NextPage,
} from 'next';
import { useEffect, useState } from 'react';
import { LoginPanel, LoginPanelTypes } from '../components/Panel';

const Home: NextPage = () => {
  const [ panelType, setPanelType ] = useState<LoginPanelTypes>("login");
  
  const togglePanel = () => {
    setPanelType(value => {
      if (value === "register") return "login";
      return "register"
    })
  };

  return (
    <div>
      <LoginPanel panelType={panelType} />
      <p>
        {
          panelType === "register"  ? "If you don't have an account, sing up!" : "If you already have an account, just sign in"
        }
        <button onClick={togglePanel} className="btn btn-outline-primary">
          {
            panelType
          }
      </button>
      </p>
    </div>
  );
};

export default Home;