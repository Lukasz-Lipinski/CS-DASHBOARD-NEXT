import { FC } from "react";

interface LayoutProps {
  children: React.ReactElement
}

const Layout: FC<LayoutProps> = ({ children }) => { 
  return (
    <div className="d-flex justify-content-center container-fluid">
      {children}
    </div>
  )
 };

 export default Layout;