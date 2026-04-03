<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type">
        <slot />
    </button>
</template>

<style scoped>

button {
    background-image: linear-gradient(45deg, #222 50%, transparent 50%);
    background-position: 100%;
    background-size: 500%;
    transition: background 300ms ease-in-out;
}

button:hover {
    background-position: 0;
    color: #fff;
}
</style>
