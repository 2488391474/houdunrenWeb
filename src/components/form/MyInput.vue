<template>
    <input type="text" :value="props.modelValue" class="login_input mt-5" @input="$emit('update:modelValue',$event.target.value)">
</template>

<script setup lang="ts">
import { update } from 'lodash';

const props = defineProps({
    modelValue: String
})
</script>

<style scoped>
.login_input {
    @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-1 ring-offset-2 ring-violet-600 duration-300 focus:border-white
}
</style>