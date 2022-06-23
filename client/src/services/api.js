import axios from "axios";

let url = "http://localhost:4090/";

export const getData = async () => {
  try {
    const res = await axios.get(url);
    return await res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
