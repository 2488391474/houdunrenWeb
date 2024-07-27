import * as yup from 'yup'

yup.setLocale({
    mixed: {
      required: '${label}此项必填',
    },
    string:{
        email: '请输入正确的邮箱格式',
    }
  
})

export default yup