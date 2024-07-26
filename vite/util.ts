import _ from "lodash";

//解析env中的数据，使其布尔类型为真正的布尔类型，数字为真正的数字
export const parseEnv = (env: Record<string, string>): ViteEnv => {
  
  const envs: any = _.cloneDeep(env);

  Object.entries(envs).forEach(([key, value]: [string, any]) => {
    if (value == "true" || value == "false") {
      envs[key] = value == "true" ? true : false;
    } else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] = undefined;
  });

  return envs;
};
