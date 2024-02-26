import axios from "axios";

export const axiosJWT = axios.create();

export const accessChat = async (userId, access_token) => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_URL}/chat/`,
    userId,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
