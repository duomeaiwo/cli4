<template>
    <div class="app_404">
        <div class="btn">
            <el-button @click="jumpto()">404 go back to homepage</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app_404',
    data() {
        return {}
    },
    created() {},
    mounted() {},
    methods: {
        jumpto() {
            this.$router.push('/')
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.app_404 {
    position: relative;
    height: 100%;
    .btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
