import { Table, Button, Image, Popconfirm } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { IMovie } from "../interfaces/movie";

function ListPage() {
  const { data = [], isLoading, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/movies");
      return res.data as IMovie[];
    },
  });

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/movies/${id}`);
    await refetch();
  };

  const columns = [
    { title: "Image", dataIndex: "image", key: "image", render: (image: string) => <Image src={image} width={100} /> },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Director", dataIndex: "director", key: "director" },
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: IMovie) => (
        <div className="space-x-2">
          <Link to={`/edit/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Popconfirm title="Bạn có chắc chắn muốn xóa?" onConfirm={() => handleDelete(record.id)}>
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Danh sách</h1>
        <Link to="/add">
          <Button type="primary">Thêm mới</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          loading={isLoading}
          rowKey="id"
        />
      </div>
    </div>
  );
}

export default ListPage;
