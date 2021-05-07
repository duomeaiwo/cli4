<template>
    <div class="breadBar" ref="scrollBox">
        <el-scrollbar ref="scrollContainer" :vertical="false" @wheel.native.prevent="handleScroll">
            <el-tag
                class="tag"
                v-for="(item, index) in routesList"
                :key="index"
                :closable="computeClosable(item.path)"
                @click="jumpTo(item.path)"
                @close="handleCloseTag(item.path)"
                :effect="isActive(item.path)"
                >{{ item.meta.title }}</el-tag
            >
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    name: 'BreadBar',
    data() {
        return {
            routesList: [
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
            ],
        }
    },
    watch: {
        $route(route) {
            this.computeRoutes(route)
        },
    },
    computed: {
        scrollWrapper() {
            return this.$refs.scrollContainer.$refs.wrap
        },
    },
    created() {
        this.computeRoutes(this.$route)
    },
    methods: {
        isActive(path) {
            return path === this.$route.path ? 'dark' : 'plain'
        },
        computeRoutes(val) {
            let flag = true
            this.routesList.forEach((x) => {
                if (val.path == x.path) {
                    flag = false
                }
            })
            flag ? this.routesList.push(val) : ''
        },
        computeClosable(path) {
            if (path == '/homepage/index') {
                return false
            } else if (path == this.$route.path) {
                return true
            } else {
                return false
            }
        },
        jumpTo(path) {
            this.$router.push(path)
        },
        handleCloseTag(tag) {
            this.routesList.forEach((val, index) => {
                if (val.path == tag) {
                    this.routesList.splice(index, 1)
                    this.$router.push('/homepage/index')
                }
            })
        },
        handleScroll(e) {
            const eventDelta = e.wheelDelta || -e.deltaY * 40
            const $scrollWrapper = this.scrollWrapper
            // el-scrollbar的$refs属性可以拿到外层wrap的dom
            // console.log(this.$refs.scrollContainer)
            // console.log($scrollWrapper)
            console.log($scrollWrapper.scrollLeft)
            console.log(eventDelta)
            $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.breadBar {
    width: 100%;
    height: 42px;
    text-align: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;

    white-space: nowrap;
    .tag {
        margin: 5px 10px;
        cursor: pointer;
    }
}
</style>
