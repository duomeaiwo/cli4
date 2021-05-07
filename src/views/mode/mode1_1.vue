<template>
    <div class="mode1_1">
        <!-- mode1_1 -->
        <div>{{totalCount}}次</div>
        <div>{{username}}</div>
        <div>{{nameDesc}}</div>
        <el-button type="primary" @click="addCount()" style="display:block;margin:20px auto">增加</el-button>
        <el-input placeholder="请输入内容" v-model="username"  style="width: 360px">
            <el-button slot="append" @click="changeName()">确认修改</el-button>
        </el-input>
    </div>
</template>

<script>
import { mapState , mapMutations , mapActions , mapGetters  } from 'vuex';
export default {
    name: 'Mode1_1',
    data() {
        return {
            username: '',
        }
    },
    computed: {
        ...mapState({
            totalCount: (state) => state.count,
        }),
        ...mapGetters({
            nameDesc: 'desc'
        })
    },
    created() {
        this.username = this.$store.state.username
    },
    mounted() {},
    methods: {
        addCount() {
            this.$store.commit('addCount')
        },
        changeName() {
            this.$store.commit('saveName', {
                name: this.username
            })
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.mode1_1 {
    height: 100%;
}
</style>
