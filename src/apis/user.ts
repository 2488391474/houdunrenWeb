import { http } from "@/plugins/axios";

export interface userInfo {
  name: string;
  age: string;
}
interface loginInterface{
    token:string
}

function info() {
  return http.request<userInfo>({
    url: "info",
  });
}
function login() {
  return http.request<loginInterface>({
    method: "get",
    url: "login",
  });
}

export default { info, login };
