<template>
    <div class="login">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="loginContainer">
            <div class="title">Login Form</div>
            <el-form-item prop="username">
                <el-input ref="username" class="inputStyle" v-model="loginForm.username" type="text">
                    <el-icon slot="prepend" class="el-icon-user-solid"></el-icon>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <!-- <el-input ref="pwd" class="inputStyle" v-model="loginForm.password" type="password">
                    <el-icon slot="prepend" class="el-icon-lock"></el-icon>
                    <span class="icon iconfont icon-eye" slot="append"></span>
                </el-input> -->
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" class="inputStyle" type="primary" @click="handleLogin()">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        const validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                callback()
            }
        }

        return {
            loginForm: {
                username: '',
                password: '',
            },
            loading: false,
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validateUsername,
                    },
                ],
                password: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validatePassword,
                    },
                ],
            },
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        handleLogin() {
            this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                    this.loading = true
                    let res = await this.$store.dispatch('login', this.loginForm)
                    console.log(res)
                    if (res === '200') {
                        this.loading = false
                        console.log('success')
                        this.$router.push('/')
                    }

                    // console.log(this.loginForm)
                } else {
                    console.log('error submit')
                    return false
                }
            })
        },
    },
}
</script>

<style lang="scss">
.login {
    .loginContainer {
        width: 450px;
        box-sizing: border-box;
        margin: 0 auto;
        .el-form-item {
            background: rgba(0, 0, 0, 0.1);
            height: 47px;
            .el-form-item__content {
                height: 100%;
            }
        }
        .el-form-item:nth-child(3), .el-form-item:nth-child(2) {
            .el-form-item__content {
                border: 2px solid #505050;
            }
        }
        .el-input {
            background: #263140;
            height: 47px;
            // 解决chrome中input自动填充后颜色不一致问题
            input {
                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px #263140 inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
        .el-input__inner {
            background: transparent;
            height: 47px;
            color: #fff;
            border: none;
            width: 90%;
        }
        .el-input-group__prepend {
            background: #263140;
            border: none;
        }
        .el-form-item.is-error .el-input__inner,
        .el-form-item.is-error .el-input__inner:focus,
        .el-form-item.is-error .el-textarea__inner,
        .el-form-item.is-error .el-textarea__inner:focus,
        .el-message-box__input input.invalid,
        .el-message-box__input input.invalid:focus {
            border-color: #505050;
        }
    }
}
</style>
<style lang="scss" scoped>
@import '@/style/variables.scss';
.login {
    height: 100%;
    background-color: $blue;
    color: #fff;
    .loginContainer {
        padding-top: 150px;
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .inputStyle {
            width: 450px;
        }
    }
}
</style>
