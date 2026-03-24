import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IMovieInput } from "../interfaces/movie";

function AddPage() {
  const navigate = useNavigate();

  const onFinish = async (values: IMovieInput) => {
    await axios.post("http://localhost:3000/movies", values);
    navigate("/list");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form layout="vertical" className="space-y-6" onFinish={onFinish}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please nhập tiêu đề" }]}>
          <Input placeholder="Nhập tiêu đề" />
        </Form.Item>

        <Form.Item label="Director" name="director" rules={[{ required: true, message: "Please nhập đạo diễn" }]}>
          <Input placeholder="Nhập đạo diễn" />
        </Form.Item>

        <Form.Item label="Image URL" name="image" rules={[{ required: true, message: "Please nhập URL ảnh" }]}>
          <Input placeholder="Nhập URL ảnh" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddPage;
