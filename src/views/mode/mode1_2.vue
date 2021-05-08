<template>
    <div class="mode1_2">
        <div>{{count}}</div>
        <div>{{username}}</div>
        <div>{{gender}}</div>
        <div>{{desc}}</div>
        <el-input v-model="username" style="width: 300px">
        <el-button @click="saveUserInfo(username)" slot="append">确认</el-button>
        </el-input>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
    name: 'Mode1_2',
    data() {
        return {
            username: ''
        }
    },
    computed: {
        ...mapState(['count', 'gender']),
        ...mapGetters(['desc']),
    },
    created() {
        this.username = this.$store.state.username
    },
    mounted() {},
    methods: {
        ...mapMutations(['saveUserInfo']),
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.mode1_2 {
    height: 100%;
}
</style>
