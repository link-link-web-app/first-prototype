import axios from "axios";

// export function
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  });
};
