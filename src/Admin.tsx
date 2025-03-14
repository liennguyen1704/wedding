/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { IUser } from "./type";
import { FE_BASE_URL } from "./constants/url";
import "./admin.css";

const Admin: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [form] = Form.useForm();

  const fetchUsers = async () => {
    const userCollection = collection(db, "user");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IUser[];
    setUsers(userList);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCopy = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        message.success("Sao chép link thành công");
      })
      .catch((err) => {
        console.error("Không thể sao chép: ", err);
      });
  };

  const handleAddUser = async (values: any) => {
    const newUser = {
      name: values.name,
      isPublicMessage: false,
      message: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      guestBy: values.guestBy || null,
    };

    try {
      await addDoc(collection(db, "user"), newUser);
      message.success("Thêm người dùng thành công");
      form.resetFields();
      fetchUsers();
      setIsModalVisible(false);
    } catch (error) {
      message.error("Thêm người dùng thất bại");
      console.error("Error adding user: ", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa người dùng này?");
    if (confirm) {
      try {
        await deleteDoc(doc(db, "user", id));
        message.success("Xóa người dùng thành công");
        fetchUsers();
      } catch (error) {
        message.error("Xóa người dùng thất bại");
        console.error("Error deleting user: ", error);
      }
    }
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Khách của ai?",
      key: "guestBy",
      render: (_: any, record: IUser) => {
        switch (record.guestBy) {
          case "GROM":
            return "Chú rể";
          case "BRIDE":
            return "Cô dâu";
          default:
            return "-";
        }
      },
    },
    {
      title: "Có tới dự không?",
      dataIndex: "arrive",
      key: "arrive",
    },
    {
      title: "Lời nhắn",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Link",
      key: "message",
      render: (_: any, record: IUser) => (
        <Button
          onClick={() => handleCopy(`${FE_BASE_URL}/thiep-moi/${record.id}`)}
          style={{ marginLeft: "8px" }}
        >
          Sao chép link
        </Button>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: IUser) => (
        <Button danger onClick={() => handleDeleteUser(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Input.Search
          placeholder="Tìm kiếm theo tên"
          onSearch={handleSearch}
          style={{ marginBottom: "20px", width: 300 }}
        />
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          style={{ marginBottom: "20px" }}
        >
          Thêm người dùng
        </Button>
      </div>

      <Modal
        title="Thêm người dùng"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddUser}>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input placeholder="Nhập tên" />
          </Form.Item>

          <Form.Item
            name="guestBy"
            label="Khách của ai?"
            rules={[{ required: true, message: "Vui lòng chọn người mời!" }]}
          >
            <Select placeholder="Chọn người mời">
              <Select.Option value="GROM">Chú rể</Select.Option>
              <Select.Option value="BRIDE">Cô dâu</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm người dùng
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Table
        dataSource={filteredUsers}
        columns={columns}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default Admin;
