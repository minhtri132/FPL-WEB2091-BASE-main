import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovie, IMovieInput } from "../interfaces/movie";

function EditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      const res = await axios.get(`http://localhost:3000/movies/${id}`);
      setMovie(res.data as IMovie);
      setLoading(false);
    };

    load();
  }, [id]);

  const onFinish = async (values: IMovieInput) => {
    await axios.put(`http://localhost:3000/movies/${id}`, values);
    navigate("/list");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Cập nhật</h1>

      <Form layout="vertical" className="space-y-6" onFinish={onFinish} initialValues={movie || undefined}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Nhập tiêu đề" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Director" name="director" rules={[{ required: true, message: "Nhập đạo diễn" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Image URL" name="image" rules={[{ required: true, message: "Nhập URL ảnh" }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditPage;
