import * as veeValidate from "vee-validate";
import { localize } from "@vee-validate/i18n";
import yup from "./yup";
import * as rules from "@vee-validate/rules";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

veeValidate.configure({
  generateMessage: localize("zh_CN", zh_CN),
});

Object.keys(rules).forEach((key) => {
  if (key != "all") {
    // @ts-ignore
    veeValidate.defineRule(key, rules[key]);
  }
});

const modules = { yup, ...veeValidate };
export default modules;
