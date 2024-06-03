import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";

import logo from "../assets/images/logo.png";
import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    navigate("/login");
  };

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Full Stack logo" />
      </div>

      <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
    </div>
  );
};

export default Sidebar;
