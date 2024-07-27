import _ from "lodash";

class Helper {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }
  //   解析env中的内容
  private getEnvs() {
    const envs: any = _.cloneDeep(import.meta.env);

    Object.entries(envs).forEach(([key, value]: [string, any]) => {
      if (value == "true" || value == "false") {
        envs[key] = value == "true" ? true : false;
      } else if (/^\d+$/.test(value)) envs[key] = Number(value);
      else if (value == "null") envs[key] = null;
      else if (value == "undefined") envs[key] = undefined;
    });
    return envs;
  }
}

const helper = new Helper();
const { env } = helper;
export default helper;
export { env };
