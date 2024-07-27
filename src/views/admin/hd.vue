<template>
    <div>
        <Form @submit="onSubmit">
            <Field name="account" label="账号" 
            :rules="{email:true,required:true}"
                #default="{ field, errorMessage }" :validate-on-input="true">
                <input type="text" v-bind="field"/>
                <p class="text-red-500">{{ errorMessage }}</p>
            </Field>
            <button>submit</button>
        </Form>
    </div>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
const { Form, Field } = v;

const onSubmit = (value: any) => {
    console.log(value);
    alert('ok')
}
</script>

<style scoped lang="scss">
div {
    @apply flex justify-center items-center;

    input {
        @apply border-2 border-blue-200 outline-none;
    }
}
</style>