import axios, { AxiosRequestConfig } from "axios";

class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  //                    使用泛型
  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig):Promise<D> {
    return new Promise(async (reslove, reject) => {
      try {
        const result = await this.instance.request<D>(config);
        reslove(result.data);
      } catch (e) {
        return reject(e);
      }
    });
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export default Axios;
