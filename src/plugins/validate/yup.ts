import * as yup from 'yup'
import _ from 'lodash'
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

// 将zh_cn中的field字段全部改为label 以符合yup的匹配要求
const zntext = _.cloneDeep(zh_CN['messages'])
Object.entries(zntext).forEach(([key, value]) => {
  zntext[key] = value.replace(/\{field\}/ig, '${label}')
})

yup.setLocale({
    mixed: {
      required: '${label}此项必填',
    },
    string:zntext
  
})

export default yup