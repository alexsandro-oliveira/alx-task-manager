import CustomButton from "./CustomButton";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <h1>Task Manager</h1>
      </div>

      <CustomButton>Sair</CustomButton>
    </div>
  );
};

export default Sidebar;
