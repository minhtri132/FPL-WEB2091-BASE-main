import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";

import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";

import Header from "./component/Header";
import Login from "./component/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>
    <Header />
    <Login />
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* ROUTER */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-4xl font-bold text-center">
                Chào mừng đến với WEB2091
              </h1>
            }
          />
          <Route path="/list" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Toaster />
    </>
    
  );
}

export default App;