<template>
    <div class="mode1_2">
        <header>前端模糊查询</header>
        <el-input v-model="inputV"></el-input>
        <section style="margin-top: 20px">已选内容
        <el-button v-for="(item, index) in selected" :key="index">{{ item }}</el-button>

        </section>
        <section style="margin-top: 20px">已有内容
        <el-button v-for="(item) in list" :key="item">{{ item }}</el-button>

        </section>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'Mode1_2',
    data() {
        return {
            username: '',
            inputV: '',
            list: ['wqze', '你buwrqe', 'qwe好', 'wqewe', 'dv', 'qwe', 'vqw'],
            selected: [],
        }
    },
    computed: {
        ...mapState(['count', 'gender']),
        ...mapGetters(['desc']),
    },
    created() {
        this.username = this.$store.state.username
    },
    watch: {
        inputV: {
            handler(val, oldval) {
                this.search(val)
            },
            deep: true,
        },
    },
    mounted() {},
    methods: {
        search(val) {
            this.selected = []
            if (val !== '') {
                this.selected = this.list.filter((value, index, array) => {
                    return value.indexOf(val) != -1
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.mode1_2 {
    height: 100%;
}
</style>
