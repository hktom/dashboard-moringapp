import { HOST_URL, TOKEN } from "../../config/apollo";
const axios = require("axios").default;

export const uploadImageRequest = async (image: File | any) => {
  let data = new FormData();
  data.append("image", image);

  let res = await axios.post(`${HOST_URL}api/upload/image`, data, {
    headers: {
      "content-type": "multipart/form-data",
      authorization: "Bearer " + TOKEN,
    },
  });
  return res;
};
