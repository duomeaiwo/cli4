<template>
    <section class="appmain">
        <router-view />
    </section>
</template>

<script>
export default {
    name: 'AppMain',
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
    .appmain {
        padding: 20px;
    }
</style>