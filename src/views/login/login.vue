<template>
    <div class="page">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 140 60" id="loginLogo" width="100%" height="100%">
                    <g fill="#1B9DFF" fill-rule="evenodd">
                        <g fill-rule="nonzero">
                            <path d="M74.16 1.17h-1.298a.633.633 0 0 0-.636.627v2.55c0 .346.286.627.636.627h2.593a.633.633 0 0 0 .636-.627v-1.27c0-1.052-.866-1.908-1.932-1.908M45.477 1.169H42.61a.633.633 0 0 0-.637.627V6.56c0 .338.272.716.637.716h4.376c.48.02.974.358.991.964v4.45c0 .346.286.627.637.627h2.342c.35 0 .636-.281.636-.628V5.37c0-1.05-.866-1.905-1.931-1.905h-3.548V1.796a.632.632 0 0 0-.636-.627"></path>
                            <path d="M48.728 30.016h-1.772a.838.838 0 0 1-.843-.83V10.131a.632.632 0 0 0-.636-.628h-2.59a.633.633 0 0 0-.636.628v20.085c0 1.991 1.642 3.611 3.66 3.611h2.817c.35 0 .636-.281.636-.628v-2.556a.633.633 0 0 0-.636-.628M121.481 1.613h-3.125a1.88 1.88 0 0 0-.247.016l-.08.012a1.92 1.92 0 0 0-.457.14l-.013.007a1.877 1.877 0 0 0-.497.335c-.11.125-12.228 14.099-12.415 14.339l-.01.012a.607.607 0 0 0-.17.42c0 .338.279.613.62.613h3.127a2.171 2.171 0 0 0 .246-.017l.085-.012c.154-.028.307-.074.451-.14l.075-.035a1.893 1.893 0 0 0 .543-.412l12.327-14.254a.608.608 0 0 0 .162-.411.618.618 0 0 0-.622-.613M84.529 33.806h7.787c2.127 0 3.858-1.708 3.858-3.808V17.032c0-.516.192-1.014.539-1.4.085-.099 9.27-10.703 9.381-10.829.019-.022.186-.18.186-.97v-.745c0-.758-.457-1.444-1.164-1.748l-.02-.01a2.182 2.182 0 0 0-.255-.083l-.068-.018-.035-.008a.424.424 0 0 0-.045-.008L104.6 1.2l-.054-.008h-.015l-.019-.001-.043-.002a1.573 1.573 0 0 0-.109-.006h-.059l-24.959.004a.67.67 0 0 0-.672.664v1.693c0 .541.29 1.033.742 1.252.174.085.402.14.717.171l.173.016.394.005h18.562c.237 0 .43.191.43.426 0 .103-.036.2-.102.275l-6.966 8.437a2 2 0 0 0-.52 1.34V29.02a.88.88 0 0 1-.885.873l-5.901-.001a1.45 1.45 0 0 0-1.458 1.438v1.894c0 .343.277.582.674.582M131.048 1.996a1.939 1.939 0 0 0-.453.139l-.073.035a1.918 1.918 0 0 0-.544.412l-23.346 27.054c-.193.245-.39.497-.39.863v1.079c0 1.051.865 1.907 1.93 1.907h27.301c2.09 0 3.791-1.68 3.791-3.742l-.001-.01v-4.677a.083.083 0 0 1 0-.018v-.518a1.45 1.45 0 0 0-1.458-1.44h-1.885a.656.656 0 0 0-.66.652v4.942a.866.866 0 0 1-.87.859h-20.96a.43.43 0 0 1-.42-.425c0-.1.035-.197.099-.272l22.216-25.845a.606.606 0 0 0 .162-.411.617.617 0 0 0-.62-.613h-3.488a2.019 2.019 0 0 0-.247.017l-.084.012zM69.542 33.828l5.912-.002c.35 0 .636-.282.636-.628l-.006-1.821c0-.75-.619-1.361-1.379-1.361H70.69a.953.953 0 0 1-.944-.936V22.7h5.838c.28 0 .506-.225.506-.501v-2.811c0-.276-.227-.5-.506-.5h-5.838v-5.572h5.699c.35 0 .636-.28.636-.627v-2.557a.633.633 0 0 0-.637-.627h-5.699V1.797a.633.633 0 0 0-.636-.628H66.52a.633.633 0 0 0-.636.628v7.708H60.47V4.98h1.86c.352 0 .637-.281.637-.627V1.798a.633.633 0 0 0-.636-.628h-8.423a.632.632 0 0 0-.636.628v2.556c0 .346.285.627.636.627h2.7v4.524h-2.7a.632.632 0 0 0-.636.627v2.556c0 .346.285.628.636.628h2.7v5.571h-2.83a.504.504 0 0 0-.506.5V22.2c0 .276.227.5.507.5h2.83v6.462a.838.838 0 0 1-.842.83h-1.86a.633.633 0 0 0-.635.629v2.556c0 .346.285.627.636.627h2.904c2.017 0 3.658-1.62 3.658-3.61v-7.494h1.924c.279 0 .506-.224.506-.5v-2.811c0-.276-.227-.5-.506-.5H60.47v-5.572h5.413v16.696c0 2.14 1.607 3.816 3.658 3.816M8.022 2.807c-8.157 5.23-10.477 15.997-5.178 24.05C8.14 34.91 19.05 37.198 27.208 31.97c.472-.303.924-.626 1.357-.964a.95.95 0 0 0 .206-1.268v-.002c-.002 0-.002-.001-.002-.002l-.813-1.236a2.562 2.562 0 0 0-3.502-.747l-.015.009-.014.01c-5.803 3.708-13.552 2.079-17.318-3.645-3.77-5.729-2.12-13.389 3.684-17.11 4.693-3.008 10.666-2.518 14.773.81a.952.952 0 0 1-.1 1.535l-10.49 6.724a2.49 2.49 0 0 0-.747 3.472l.856 1.3a.98.98 0 0 0 1.344.283l16.465-10.555a.952.952 0 0 0 .342-1.23l-.02-.038c-.251-.473-.526-.939-.827-1.396C27.089-.134 16.18-2.423 8.022 2.807"></path>
                            <path d="M32.744 17.049l-3.298 2.114a.95.95 0 0 0-.285 1.326l2.141 3.255a.98.98 0 0 0 1.344.282l1.648-1.057a2.877 2.877 0 0 0 .864-4.01l-1.07-1.628a.978.978 0 0 0-1.344-.282"></path>
                        </g>
                        <path d="M84.936 47.864h2.56v-2.736H88.6v2.736h2.592v6.432H88.6V57.8a47.893 47.893 0 0 0 1.616-.352 30.966 30.966 0 0 0-.672-1.952l.944-.304c.48 1.216.912 2.608 1.296 4.176l-.992.24c-.096-.416-.208-.832-.304-1.216-1.76.432-3.632.8-5.632 1.088l-.272-1.072c.992-.112 1.968-.24 2.912-.4v-3.712h-2.56v-6.432zm5.184 5.376v-4.32h-1.568v4.32h1.568zm-2.576 0v-4.32h-1.536v4.32h1.536zm-8.624-.4v1.712c0 .128-.016.24-.016.368h1.536v-2.08h-1.52zm-.064 3.056c-.128 1.52-.48 2.8-1.024 3.84L77 58.984c.592-1.152.896-2.608.912-4.368v-4.944c-.08.08-.16.16-.224.24L77 49.08c1.024-1.04 1.888-2.4 2.56-4.08l1.04.24a9.828 9.828 0 0 1-.432 1.024h2.944v.8c-.352.704-.688 1.312-1.04 1.808h1.92v9.584c0 .768-.368 1.152-1.088 1.152h-.832l-.256-.928c.288.016.544.032.784.032.272 0 .416-.208.416-.608v-2.208H81.4v3.552h-.96v-3.552h-1.584zm4.16-.976v-2.08H81.4v2.08h1.616zm0-3.072v-1.984H81.4v1.984h1.616zM78.6 48.872h2.288c.336-.48.672-1.04 1.008-1.664h-2.208a14.223 14.223 0 0 1-1.088 1.664zm1.84.992h-1.52v1.984h1.52v-1.984zm25.376-4.656c-3.056.736-6.896 1.12-11.536 1.12l.352 1.04c1.984 0 3.824-.08 5.52-.208v2.608H94.6v1.12h5.552v2.624h-6.88v1.104h6.88v3.248c0 .448-.256.688-.736.688-.736 0-1.52-.032-2.336-.064l.256 1.12h2.48c.992 0 1.504-.496 1.504-1.456v-3.536h6.304v-1.104h-6.304v-2.624h5.104v-1.12h-5.104v-2.704c1.92-.192 3.6-.496 5.056-.88l-.56-.976zm3.504.816h14.272v1.12h-2.112v10.88c0 1.056-.512 1.6-1.536 1.6h-2.672l-.256-1.12c.88.032 1.728.064 2.528.064.512 0 .784-.288.784-.832V47.144H109.32v-1.12zm8.08 3.568v5.872h-5.104v1.408h-1.12v-7.28h6.224zm-5.104 4.816h4v-3.776h-4v3.776zm14.992-1.392a17.54 17.54 0 0 1-1.84 1.52l-.336-1.104c1.696-1.264 2.944-2.704 3.712-4.304l.992.448c-.384.784-.848 1.52-1.408 2.224v7.936h-1.12v-6.72zm1.472-7.968l.96.448c-.88 1.728-2.32 3.264-4.32 4.608l-.336-1.12c1.696-1.152 2.928-2.464 3.696-3.936zm2.096.576h7.568v5.104h-7.568v-5.104zm6.464 4.176v-1.184h-5.36V49.8h5.36zm-5.36-2.064h5.36v-1.184h-5.36v1.184zm-1.808 4.128h9.232v1.008h-1.936v1.36h2.304v1.008h-2.304v3.072c0 .88-.464 1.328-1.392 1.328h-1.776l-.24-1.088c.576.048 1.104.08 1.616.08.432 0 .656-.208.656-.592v-2.8h-6.736v-1.008h6.736v-1.36h-6.16v-1.008zm1.68 3.856c.912.88 1.616 1.664 2.096 2.352l-.88.608c-.528-.736-1.216-1.536-2.048-2.368l.832-.592zM.896 47.153v1.056h5.872v1.52H1.792v1.024h4.976v1.552h-6.4v1.056h13.984v-1.056h-6.4v-1.552h5.024v-1.024H7.952v-1.52h5.872v-1.056h-3.552c.272-.496.48-1.008.64-1.552l-1.232-.16a7.825 7.825 0 0 1-.608 1.712H5.728c-.24-.624-.48-1.184-.736-1.68l-1.216.192c.288.448.544.944.768 1.488H.896zm5.984 6.624c-.064.448-.176.88-.32 1.296H.736v1.088h5.296a4.652 4.652 0 0 1-1.024 1.152c-1.024.816-2.688 1.44-5.008 1.872l.48 1.12c2.608-.544 4.432-1.28 5.472-2.224a6.65 6.65 0 0 0 1.36-1.76c1.056 1.92 3.344 3.232 6.864 3.936l.608-1.088c-3.152-.528-5.28-1.536-6.384-3.008H14v-1.088H7.808c.112-.352.192-.752.256-1.168l-1.184-.128zm11.888-8.416l1.136.096c-.192 1.12-.384 2.176-.576 3.136h2.768v.656c-.144 2.528-.672 4.736-1.568 6.608.928.72 1.68 1.376 2.272 1.952l-.784.912c-.544-.576-1.232-1.184-2.032-1.856a12.193 12.193 0 0 1-3.056 3.408l-.784-.96a10.725 10.725 0 0 0 2.944-3.184 69.54 69.54 0 0 0-2.464-1.872 44.253 44.253 0 0 0 1.312-4.56H16.24v-1.104h1.936c.224-1.056.416-2.128.592-3.232zm.832 9.792c.768-1.584 1.216-3.408 1.36-5.456h-1.872c-.384 1.696-.784 3.104-1.2 4.224.608.432 1.184.848 1.712 1.232zm3.04-2.896h3.616V50.24c.864-.752 1.68-1.664 2.464-2.752h-5.616v-1.12h6.928v1.12a22.908 22.908 0 0 1-2.608 3.104v1.664h3.264v1.12h-3.264v5.12c0 1.024-.432 1.536-1.264 1.536h-2.304l-.304-1.088c.656 0 1.376.016 2.144.016.368 0 .56-.272.56-.816v-4.768H22.64v-1.12zm12.576-2.624h3.84v3.696h-4.704v1.12h4.704v4.064h-6.64v1.152h14.096v-1.152h-6.288v-4.064h4.944v-1.12h-4.944v-3.696h5.264v-1.12h-5.264v-2.848h-1.168v2.848h-3.424c.24-.72.448-1.488.624-2.32l-1.168-.208c-.528 2.672-1.552 4.8-3.056 6.368l.736.944c.992-.992 1.808-2.208 2.448-3.664zm17.072.56h4.576V47.68a42.372 42.372 0 0 1-3.888.176l-.352-1.04c3.488 0 6.4-.4 8.704-1.184l.56.992c-1.12.4-2.4.704-3.856.912v2.656h4.608v1.104h-4.608v2.48h3.6v6.416h-1.136v-.848h-6v.88H53.36v-6.448h3.504v-2.48h-4.576v-1.104zm2.208 8.064h6v-3.392h-6v3.392zM49.392 45.76l-.784.752c1.152.768 2.064 1.472 2.72 2.144l.784-.784c-.736-.704-1.648-1.408-2.72-2.112zm-.368 3.824l-.8.784c1.168.832 2.08 1.632 2.752 2.384l.8-.8c-.736-.8-1.664-1.584-2.752-2.368zm1.888 4.256a47.634 47.634 0 0 1-2.416 5.68l1.152.496a60.316 60.316 0 0 0 2.304-5.776l-1.04-.4z"></path>
                    </g>
                </symbol>
            </defs>
        </svg>
        <div class="login-wrapper">
            <div class="login-box">
                <div class="login-header">
                    <svg class="logo"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#loginLogo"></use></svg>
                    <div class="tab-bar">
                        <a href="javascript:;" @click="loginTabChange(1)" :class="{active: loginType == 1}">短信登录</a>
                        <a href="javascript:;" @click="loginTabChange(2)" :class="{active: loginType == 2}">密码登录</a>
                    </div>
                </div>
                <div class="login-body">
                    <div class="login-form" v-if="loginType == 1" >
                        <section class="field">
                            <input type="tel" maxlength="11" placeholder="手机号" name="mobile"
                                v-model.number="mobile"
                                @click.prevent="inputFocus"
                                @input="mobileInput"
                                v-validate.initial="{ rules: { required: true, regex: /^1[3-9]\d{9}$/ } }" >
                            <button class="vcode"
                                @click.prevent="sendValidationCode"
                                :disabled="!mobileValidation || !vcodeStatus">{{vcodeText}}</button>
                        </section>
                        <section class="field">
                            <input type="tel" maxlength="6" placeholder="验证码" name="vcode"
                                v-model.number="vcode"
                                @click.prevent="inputFocus"
                                v-validate.initial="{ rules: { required: true, regex: /^\d{6}$/ } }">
                        </section>
                        <section class="field">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="###" target="_blank">《用户服务协议》</a></section>
                        <button class="btn-submit" @click="smsLogin">登录</button>
                    </div>

                    <div class="login-form" v-if="loginType == 2" >
                        <section class="field">
                            <input type="text" name="accountName" placeholder="手机/邮箱/用户名"
                                @click.prevent="inputFocus"
                                v-model="accountName"
                                v-validate.initial="{ rules: { required: true } }">
                        </section>
                        <section class="field">
                            <input v-if="switchType == 'password'" type="password" name="password" placeholder="密码"
                                v-model="password"
                                @click.prevent="inputFocus"
                                v-validate.initial="{ rules: { required: true } }">
                            <input v-else type="text" name="password" placeholder="密码"
                                v-model="password"
                                @click.prevent="inputFocus"
                                v-validate.initial="{ rules: { required: true } }">
                            <div class="switch" :class="{on: !!switchStatus, off: !switchStatus}"
                                @click="switchPasswordText">
                                <i class="switch-btn"></i>{{switchText}}
                            </div>
                        </section>
                        <button class="btn-submit" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
        <message ref="message"></message>
        <toast ref="toast"></toast>
        <loading ref="loading"></loading>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import {
        setCookies,
    } from 'components/common/utils'
    import {dictionary} from '@/util/validator'
    import loading from 'components/common/loading'
    import message from 'components/notice/message'
    import toast from 'components/notice/toast'
    import {sleep} from 'components/common/utils'

    export default {
		name: 'login',
        data () {
            return {
                loginType: 1,   // 登录方式: 短信(1)，密码(2)
                switchStatus: !1,   // 密码切换开关
                mobile: '',       // 手机号
                vcode: '',      // 用户输入的验证码
                vcodeStatus: !!1,    // 发送验证码
                vcodeSecond: 30,     // 发送验证码倒计时
                vcodeText: '获取验证码',      // 发送验证按钮文字
                vcodeTimeId: null,   // 计时器
                accountName: '',    // 账号名称
                password: '',   // 帐号密码
                // mobileValidation: !!1,    // 是否可发送验证码
            }
        },
        computed: {
            switchText () {return this.switchStatus ? 'abc' : '...'},
            switchType () {return this.switchStatus ? 'text' : 'password'},
            mobileValidation () {return !this.errors.first('mobile')},
            loginRedirect () {return this.$route.query.redirect || this.$route.meta.loginRedirect},
        },
        mounted () {
            this.$validator.updateDictionary(dictionary);
        },
        methods: {
            ...mapActions([
                'sendVcodeAction',
                'loginAction',
                'userInfoAction',
            ]),
            loginTabChange (type) {
                this.loginType = type;
            },
            //
            inputFocus ($event) {
                $event.target.focus();
            },
            mobileInput ($event) {

            },
            // 发短信验证
            sendValidationCode () {
                if (this.mobileValidation && this.vcodeStatus) {
                    this.vcodeStatus = !1;
                    this.vcodeTimeId = setInterval(() => {
                        if (this.vcodeSecond == 1) {
                            clearInterval(this.vcodeTimeId);
                            this.vcodeText = '重新发送';
                            this.vcodeStatus = !!1;
                            this.vcodeSecond = 30;
                            return;
                        }
                        this.vcodeSecond--;
                        this.vcodeText = '已发送('+ this.vcodeSecond +')';
                    }, 1000);
                    this.sendVcodeAction({
                        captcha_code: '',
                        mobile: this.mobile,
                        scene: 'login',
                        type: 'sms'
                    }).then(res => {
                        // 模拟手机短信
                        sleep(1000).then(() => {
                            this.$refs.message.open({
                                title: '信息',
                                message: res.message,
                                duration: 5000,
                            });
                        })
                    })
                }
            },
            // 密码显示开关
            switchPasswordText () {
                this.switchStatus = !this.switchStatus;
            },
            // 短信登录
            smsLogin () {
                this.$validator.validateAll()
                .then(res => {
                    if (res) {
                        this.loginAction({
                            password: this.vcode,
                            account: this.mobile,
                            type: 'sms'
                        }).then(res => {
                            if (res.login) {
                                this.$router.push(this.loginRedirect);
                            } else {
                                this.$refs.toast.open({message: res.message});
                            }
                        });
                    } else {
                        const errors = this.errors;
                        const fields = this.$validator.fields.items;console.log(this.$validator)
                        let errorInput = null;
                        let errMsg = null;
                        if (errors.has('mobile')) {
                            errorInput = fields.find((v, i, a) => v.name == 'mobile');
                            errMsg = errors.first('mobile');
                        } else if (errors.has('vcode')) {
                            errorInput = fields.find((v, i, a) => v.name == 'vcode');
                            errMsg = errors.first('vcode');
                        }
                        errorInput.el.focus();
                        this.$refs.toast.open({message: errMsg});
                    }

                })
                .catch(err => {console.log(err)
                    this.$refs.toast.open({message: '登录失败，请重新登录'});
                })
            },
            // 密码登录
            login () {
                this.$validator.validateAll()
                .then(res => {
                    if (res) {
                        this.loginAction({
                            password: this.password,
                            account: this.accountName
                        }).then(res => {
                            if (res.login) {
                                this.$router.push(this.loginRedirect);
                            } else {
                                this.$refs.toast.open({message: res.message});
                            }
                        });
                    } else {
                        const errors = this.errors;
                        const fields = this.$validator.fields.items;
                        let errorInput = null;
                        let errMsg = null;
                        if (errors.has('accountName')) {
                            errorInput = fields.find((v, i, a) => v.name == 'accountName');
                            errMsg = errors.first('accountName');
                        } else if (errors.has('password')) {
                            errorInput = fields.find((v, i, a) => v.name == 'password');
                            errMsg = errors.first('password');
                        }
                        errorInput.el.focus();
                        this.$refs.toast.open({message: errMsg});
                    }
                })
                .catch(err => {console.log(err)
                    this.$refs.toast.open({message: '登录失败，请重新登录'});
                })
            }
        },
        components: {
            loading,
            message,
            toast,
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
body {
    background-color: #fff;
}
.page {
    @include page;
}
.login-wrapper {
    height: 100%;
    background-color: $fc;
    overflow: hidden;
}
.login-box {
    margin: 0 2.5rem;
    @include flex;
    @include flex-direction(column);
    @include flex-align;
}
.login-header {
    margin: 2rem 0 0;
    .logo {
        margin: 0 auto;
        display: block;
        width: 11rem;
        height: 6rem;
    }
    .tab-bar {
        display: table;
        margin: 2.6rem 0 0;
        width: 100%;
        text-align: center;
        a {
            display: inline-block;
            margin: 0 1.7rem;
            line-height: 2rem;
            font-size: 1.2rem;
        }
        a.active {
            color: #2395ff;
            border-bottom: #2395ff solid 4px;
        }
    }
}
.login-body {
    width: 100%;
}
.login-form {
    // padding: 0 1.2rem;
    .field {
        position: relative;
        margin: 1.5rem 0 0;
        font-size: 1.1rem;
        color: #868686;
        .vcode {
            position: absolute;
            right: 1rem;
            top: 1rem;
            background-color: transparent;
            @include ct;
            color: #2395ff;
        }
        [disabled="disabled"].vcode {
            color: #999;
        }
    }
    input {
        padding: 0 1rem;
        width: 100%;
        height: 3.8rem;
        // line-height: 1.6rem;
        border: #ddd solid 2px;
        border-radius: .4rem;
        -webkit-appearance: none;
    }
    input:focus {
        border-color: #2395ff;
    }

    a {
        color: #2395ff;
    }
    .btn-submit {
        margin: 2rem 0 0;
        @include wh(100%, 3.5rem);
        line-height: 3.5rem;
        text-align: center;
        border-radius: .3rem;
        background-color: #00d762;
        color: #fff;
        cursor: pointer;
        font-size: 1.3rem;
    }
    .switch {
        right: 1rem;
        @include flex;
        background-color: transparent;
        @include ct;
        @include flex-align;
        padding: 0 .5rem;
        @include wh(3rem, 1.2rem);
        border: 1px solid #ccc;
        border-radius: .6rem;
        @include transform(background-color border-color);
        @include transition;
        font-size: 1rem;
        color: #999;
        .switch-btn {
            @include ct;
            left: -1px;
            @include wh(1.2rem, 1.2rem);
            border: 1px solid #ccc;
            border-radius: 50%;
            background: $fc;
            box-shadow: 0 .2rem .3rem 0 rgba(0,0,0,.1);
            @include transition;
        }
    }
    .switch.off {
        @include flex-justify(flex-end);
    }
    .switch.on {
        @include flex-justify(flex-start);
        border-color: #3190e8;
        background: #3190e8;
        color: #fff;
        .switch-btn {
            top: -1px;
            right: -1px;
            @include transform(translate3d(2rem, 0, 0));
        }
    }
}
</style>
