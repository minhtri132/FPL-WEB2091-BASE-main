import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Avatar, Button } from "antd";
import { useTheme } from "../context/ThemeContext";


const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const context = useContext(UserContext);
  if (!context) return null;

  const { user } = context;

  return (
    <div style={{ display: "flex", gap: 10, padding: 20 }}>
      {user ? (
        <>
          <Avatar src={user.avatar} />
          <span>{user.name}</span>
        </>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
      <Button onClick={toggleTheme}>
        {darkMode ? "Light" : "Dark"}
      </Button>
    </div>
    
  );
};

export default Header;