<script setup lang="ts">
import v from '@/plugins/validate'

// 将内容使用handleSubmit才能使用验证
const { handleSubmit } = v.useForm({
    initialValues: {
        username: 'fsw',
        password: ''
    },
    validationSchema: {
        username: v.yup.string().email().required().label('账号'),
        password: v.yup.string().required().label('密码')
    }
})

const { errorMessage: usernameError, value: usernameValue } =
    v.useField('username', { label: '用户名' })
const { errorMessage: passwordError, value: passwordValue } =
    v.useField('password', { label: '密码' })

const onSubmit = handleSubmit((value: any) => {
    console.log(value);
    alert('ok')
})

</script>

<template>
    <form @submit="onSubmit">
        <section>
            username:
            <input type="text" v-model="usernameValue" />
            <p class="error">{{ usernameError }}</p>
        </section>
        <section>
            pass:
            <input type="text" v-model="passwordValue" />
            <p class="error">{{ passwordError }}</p>
        </section>
        <button>submit</button>
    </form>
</template>

<style scoped lang="scss">
form {
    @apply flex w-screen h-screen justify-center items-center bg-gray-200;

    input {
        @apply border-4 p-2 rounded-md border-violet-500 outline-none;
    }

    button {
        @apply border bg-gray-600 px-4 rounded-md text-white;
    }

    .error {}
}
</style>