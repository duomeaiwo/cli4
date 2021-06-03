<template>
    <div class="btnPermission">
        <div>
            <el-button @click="getPermissions">getPermissions</el-button>
        </div>
        {{btnPermission}}
        <el-button v-if="btnPermission.add" type="primary">add</el-button>
        <el-button v-if="btnPermission.edit" type="primary">edit</el-button>
        <el-button v-if="btnPermission.delete" type="primary">delete</el-button>
        <div>
            <el-button @click="getInfo">getInfo</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import has from '../../directives/checkPermission'
import {getInfo} from '@/api/btnPermission.js'
export default {
    name: 'BtnPermission',
    data() {
        return {}
    },
    computed: {
        ...mapState(['btnPermission'])
    },
    created() {},
    mounted() {},
    methods: {
        getPermissions() {
            this.$store.dispatch('getPermission',8)
        },
        async getInfo() {
            let res = getInfo()
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.btnPermission {
    height: 100%;
}
</style>