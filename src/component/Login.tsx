import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "antd";

const Login = () => {
  const context = useContext(UserContext);
  if (!context) return null;

  const { setUser } = context;

  const handleLogin = () => {
    setUser({
      name: "hoadv21",
      avatar: "https://i.pravatar.cc/150",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>

      <Button danger onClick={handleLogout} style={{ marginLeft: 10 }}>
        Logout
      </Button>
    </div>
  );
};

export default Login;   