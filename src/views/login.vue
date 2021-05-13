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
                <el-input ref="pwd" class="inputStyle" v-model="loginForm.password" :type="passwordType">
                    <el-icon slot="prepend" class="el-icon-lock"></el-icon>
                    <span
                        class="icon iconfont"
                        :class="passwordType == 'password' ? 'icon-eye' : 'icon-eye-close'"
                        slot="append"
                        @click="toggleShow()"
                    ></span>
                </el-input>
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
            passwordType: 'password',
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
    mounted() {
        if (this.loginForm.username === '') {
            this.$refs.username.focus()
        } else if (this.loginForm.password === '') {
            this.$refs.password.focus()
        }
    },
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
        toggleShow() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.pwd.focus()
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
            .el-form-item__content {
                height: 100%;
                overflow: hidden;
            }
        }
        .el-form-item:nth-child(3),
        .el-form-item:nth-child(2) {
            .el-form-item__content {
                border: 2px solid #505050;
            }
        }
        .el-input {
            height: 40px;
            // 解决chrome中input自动填充后颜色不一致问题
            input {
                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px #263140 inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
        .el-input__inner {
            background: #263140;
            height: 47px;
            color: #fff;
            border: none;
            border-radius: 0;
        }
        .el-input-group__prepend,
        .el-input-group__append {
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
