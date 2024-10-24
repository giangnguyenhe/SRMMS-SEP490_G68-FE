import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, TableColumnsType } from "antd";
import { EmployeesData } from "~/services/employee";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const UseColumn = () => {
  const navigate = useNavigate();

  const columns: TableColumnsType<EmployeesData> = [
    {
      title: "ID",
      dataIndex: "empId",
      align: "center",
      width: "50px",
      render: (id) => <div className="text-xs font-semibold">{id}</div>,
    },
    {
      title: "Name",
      render: (_, record) => (
        <div className="truncate w-32 text-sm font-semibold">
          {record.empFirstName} {record.empLastName}
        </div>
      ),
      width: "120px",
    },
    {
      title: "Gender",
      dataIndex: "empGender",
      align: "center",
      width: "70px",
      render: (gender) => (
        <div
          className={`text-sm ${
            gender === "Male" ? "text-blue-500" : "text-pink-500"
          } font-medium`}
        >
          {gender}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "empEmail",
      width: "150px",
      render: (email) => (
        <div className="truncate text-sm text-gray-700">{email}</div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "empPhoneNumber",
      width: "120px",
      render: (phone) => <div className="text-sm text-gray-700">{phone}</div>,
    },
    {
      title: "Address",
      dataIndex: "empAddress",
      width: "150px",
      render: (address) => (
        <div className="truncate text-sm text-gray-700">{address}</div>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "empStartDate",
      width: "100px",
      render: (date) => (
        <div className="text-sm text-gray-700">
          {dayjs(date).format("DD/MM/YYYY")}
        </div>
      ),
    },
    {
      title: "Position",
      render: (_, record) => (
        <div className="text-sm font-medium text-gray-800">
          {record.empRole.roleName}
        </div>
      ),
      width: "100px",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "empStatus",
      align: "center",
      width: "65px",
      render: (status) => (
        <div
          className={`px-3 py-1.5 text-sm font-semibold rounded-full shadow-sm transition-all duration-300 ${
            status
              ? "bg-green-50 text-green-700 border border-green-300"
              : "bg-red-50 text-red-700 border border-red-300"
          }`}
        >
          {status ? "Active" : "Inactive"}
        </div>
      ),
    },
    {
      title: "Action",
      width: "50px",
      fixed: "right",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => navigate(`/admin/update-employee/${record.empId}`)}
          />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];
  return columns;
};

export default UseColumn;
