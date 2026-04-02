import { Form, Input, Button } from "antd";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

function Register() {
    const { setUser } = useAuthStore();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: any) => {
            return axios.post("http://localhost:3000/register", data);
        },
        onSuccess: (res) => {
            toast.success("Đăng ký thành công");

            // 🔥 Auto login
            setUser({
                user: res.data.user,
                token: res.data.accessToken,
            });

            navigate("/");
        },
        onError: () => {
            toast.error("Đăng ký thất bại");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-xl mb-4">Đăng ký</h2>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={isPending} block>
                    Đăng ký
                </Button>
            </Form>
        </div>
    );
}

export default Register;