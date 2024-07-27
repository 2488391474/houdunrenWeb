import { http } from "@/plugins/axios";

export interface userInfo {
  name: string;
  age: string;
}
interface loginInterface{
    token:string
}
interface login{
  account:string,
  password:string
}

function info() {
  return http.request<userInfo>({
    url: "info",
  });
}
function login(data:login) {
  return http.request<loginInterface>({
    method: "post",
    url: "login",
    data: data
  });
}

export default { info, login };
