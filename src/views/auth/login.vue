<template>
    <div class="bg-slate-300 h-screen flex justify-center md:items-center">
        <div class="w-[720px] bg-white rounded-md shadow-md md:grid grid-cols-2 md:-translate-y-16">
            <div class="p-8">
                <h2 class="text-center text-gray-700 text-lg">会员登录</h2>

                <div class="mt-6">
                    <MyInput v-model="form.account"></MyInput>
                    <MyInput class="mt-5" v-model="form.password"></MyInput>
                    <MyButton></MyButton>
                </div>
                

                <div class="login_btn flex gap-2 justify-center mt-5">
                    <MyLink></MyLink>
                    <MyLink></MyLink>
                    <MyLink></MyLink>
                </div>
            </div>
            <div class="hidden md:block">
                <img src="/images/login.jpg" class="object-cover h-96 w-full rounded-md">
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive<{account:number|string,password:string}>({
    account:"account",
    password:"pass"
})
</script>

<style scoped lang="scss">
.login_btn {
    a {
        @apply text-xs
    }
}
</style>