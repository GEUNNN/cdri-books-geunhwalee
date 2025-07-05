import axios from "axios";

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const instance = axios.create({
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `KakaoAK ${REST_API_KEY}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
