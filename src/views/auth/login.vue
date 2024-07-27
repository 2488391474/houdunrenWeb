<script setup lang="ts">
import userApi from "@/apis/userApi";
import v from "@/plugins/validate";
import { store } from "@/utils";
const { Form, Field, ErrorMessage } = v;

// 验证规则
const schema = v.yup.object({
  account: v.yup.string().email().required().label("账号"),
  password: v.yup.string().required().min(3).label("密码"),
});

const submit = async (value: any) => {
  const { data } = await userApi.login(value);
  store.set("token", { data, expire: 60 });
};
</script>

<template>
  <Form class="" @submit="submit" :validation-schema="schema">
    <div
      class="w-[720px] bg-white rounded-md shadow-md md:grid grid-cols-2 md:-translate-y-16"
    >
      <div class="p-8">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>

        <div class="mt-6">
          <Field
            name="account"
            #default="{ field }"
            class="hd_input"
            :validate-on-input="true"
            label="账号"
            value="248391474@qq.com"
          />
          <ErrorMessage name="account" as="div" class="hd_error"></ErrorMessage>

          <Field
            name="password"
            #default="{ field }"
            class="hd_input mt-3 mb-3"
            :validate-on-input="true"
            label="密码"
            value="root"
          />
          <ErrorMessage
            name="password"
            as="div"
            class="hd_error"
          ></ErrorMessage>

          <!-- <MyInput v-model="form.account"></MyInput>
            <MyInput class="mt-5" v-model="form.password"></MyInput> -->
          <MyButton></MyButton>

          <div class="ifont mt-3">
            <i class="fa-brands fa-weixin bg-green-600 text-white"></i>
          </div>
        </div>

        <div class="login_btn flex gap-2 justify-center mt-5">
          <MyLink></MyLink>
          <MyLink></MyLink>
          <MyLink></MyLink>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/images/login.jpg"
          class="object-cover h-full w-full rounded-md absolute"
        />
      </div>
    </div>
  </Form>
</template>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center md:items-center;

  .login_btn {
    a {
      @apply text-xs;
    }
  }
  .ifont {
    @apply flex justify-center align-middle gap-2;
    i {
      @apply p-1 cursor-pointer rounded-full;
    }
  }
}
</style>
