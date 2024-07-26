import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: {
          name: "fsw",
          age: "",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        type: "success",
        data: {
          token:Random.string(10)
        },
      };
    },
  },
] as MockMethod[];
