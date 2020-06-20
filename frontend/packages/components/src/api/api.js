import axios from "axios";

const baseUrl = "http://192.168.1.12:8000/api/";

const options = {
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   // 'Cors': 'no-cors',
  //   // 'Content-Type': 'text/plain'
  // }
}

export const Api = {
  get: async (url) => {
    try {
      const { data } = await axios.get(`${baseUrl}${url}`, options);
      return data;
    } catch (e) {
      console.error("GET ERROR", e);
    }
  },
  post: async (url, body) => {
    try {
      const { data } = await axios.post(`${baseUrl}${url}`, body);
      return data;
    } catch (e) {
      console.error("POST ERROR", e);
    }
  },
};
