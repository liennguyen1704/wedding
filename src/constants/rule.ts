import { IUser } from "../type";

const DEFINE_ARRIVE = [
  {
    label: "Mình chắc chắn sẽ đến",
    value: "Mình chắc chắn sẽ đến",
  },
  {
    label: "Mình có thể sẽ đến",
    value: "Mình có thể sẽ đến",
  },
  {
    label: "Tiếc quá mình không đến được",
    value: "Tiếc quá mình không đến được",
  },
];

const DEFINE_PUBLIC_MESSAGE = [
  {
    label: "Mọi người",
    value: 1,
  },
  {
    label: "Chỉ cô dâu, chú rể",
    value: 0,
  },
];

const DEFINE_GUEST_BY = [
  {
    label: "GROM",
    value: "GROM",
  },
  {
    label: "BRIDE",
    value: "BRIDE",
  },
];

const DEFINE_DEFAULT_MOCK_DATA: IUser = {
  id: "1234567890",
  _id: "1234567890",
  name: "Bạn/Anh/Chị",
  isPublicMessage: false,
  __v: 0,
  message: "",
  createdAt: "",
  updatedAt: "",
};

export {
  DEFINE_ARRIVE,
  DEFINE_PUBLIC_MESSAGE,
  DEFINE_GUEST_BY,
  DEFINE_DEFAULT_MOCK_DATA,
};
