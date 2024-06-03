import CustomButton from "./CustomButton";

import logo from "../assets/images/logo.png";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Full Stack logo" />
      </div>

      <CustomButton>Sair</CustomButton>
    </div>
  );
};

export default Sidebar;
