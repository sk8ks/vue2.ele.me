<template>
    <div class="page">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
                    <path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path>
                </symbol>
                <symbol viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></symbol>
                <symbol viewBox="0 0 655 1024" id="mobile" width="100%" height="100%"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></symbol>
                <symbol viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></symbol>
                <symbol viewBox="0 0 48 48" id="coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></symbol>
                <symbol viewBox="0 0 40 40" id="order" width="100%" height="100%"><path d="M31.5 3h-23C6 3 4 5.1 4 7.7v24.7C4 34.9 6 37 8.5 37h23c2.5 0 4.5-2.1 4.5-4.7V7.7C36 5.1 34 3 31.5 3zM11.8 28.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm0-6.1c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.1-.9 2.1-2 2.1zm0-6.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm5.1 11.9h13.5v-2.6H16.9v2.6zm0-6.5h13.5v-2.6H16.9v2.6zm0-6.6h13.5v-2.6H16.9v2.6z"></path></symbol>
                <symbol viewBox="0 0 40 40" id="point" width="100%" height="100%"><path d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"></path></symbol>
                <symbol viewBox="0 0 40 40" id="vip" width="100%" height="100%">
                    <path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path>
                    <path d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z" class="st0"></path>
                    <ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse>
                    <ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse>
                    <ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse>
                </symbol>
                <symbol viewBox="0 0 40 40" id="service" width="100%" height="100%">
                    <g id="service_XMLID_1_">
                        <path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path>
                        <path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path>
                        <path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path>
                    </g>
                    <path d="M0 0h40v40H0z" class="st1"></path>
                </symbol>
                <symbol viewBox="0 0 40 40" id="download" width="100%" height="100%"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></symbol>
            </defs>
        </svg>
        <header-bar title="我的"></header-bar>

        <section>
            <div class="profile-box" @click="myProfile">
                <span class="profile-avatar">
                    <svg v-if="!avatar"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use></svg>
                </span>
                <div class="profile-login">
                    <p class="t">{{username}}</p>
                    <p class="s">
                        <svg fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                        </svg>
                        <span>{{mobile}}</span>
                    </p>
                </div>
                <span class="profile-arrow">
                    <svg fill="#fff"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
                </span>
            </div>
        </section>

        <div class="profile-info">
            <!-- <a href="/profile/benefit" class="benefit"> -->
            <router-link :to="{ name: 'benefit' }" class="benefit">
                <p class="count">
                    <svg fill="#ff5f3e" v-if="gift == -1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#luckybag"></use>
                    </svg>
                    <span class="benefit-amount" v-else><em>{{gift}}</em>个</span>
                </p>
                <p class="">优惠</p>
            </router-link>
            <router-link :to="{ name: 'points' }" class="points">
                <p class="count">
                    <svg fill="#6ac20b" v-if="point == -1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#coins"></use>
                    </svg>
                    <span class="point-amount" v-else><em>{{point}}</em>分</span>
                </p>
                <p class="">积分</p>
            </router-link>
        </div>

        <section class="profile-center">
            <router-link :to="{ name: 'order' }" class="order">
                <aside class="icon-order">
                    <svg fill="#4aa5f0">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
                    </svg>
                </aside>
                <div class="cont">我的订单
                    <span class="arrow">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </router-link>
            <router-link :to="{ name: 'gift' }" class="point">
                <aside class="icon-point">
                    <svg fill="#fc7b53">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
                    </svg>
                </aside>
                <div class="cont">积分商城
                    <span class="arrow">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </router-link>
            <router-link :to="{ name: 'vipcard' }" class="vip">
                <aside class="icon-vip">
                    <svg fill="#ffc636">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip"></use>
                    </svg>
                </aside>
                <div class="cont">饿了么会员卡
                    <span class="arrow">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </router-link>
        </section>

        <section class="profile-center">
            <router-link :to="{ name: 'service' }" class="service">
                <aside class="icon-service">
                    <svg fill="#4aa5f0">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
                    </svg>
                </aside>
                <div class="cont">服务中心
                    <span class="arrow">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </router-link>
            <router-link :to="{ name: 'download' }" class="download">
                <aside class="icon-download">
                    <svg fill="#fc7b53">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
                    </svg>
                </aside>
                <div class="cont">下载饿了么APP
                    <span class="arrow">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </router-link>
        </section>

        <footer-bar></footer-bar>
        <loading ref="loading"></loading>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import {
        serializeObject,
        array2Object
    } from 'components/common/utils'
    import headerBar from 'components/header/headerBar'
    import footerBar from 'components/footer/footerBar'
    import loading from 'components/common/loading'

    export default {
		name: 'profile',
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'authenticated',
                'userInfo'
            ]),
            isAuthenticated () {return this.authenticated && this.userInfo},
            // 用户头像
            avatar () {return this.isAuthenticated ? this.userInfo.avatar : ''},
            // 用户名
            username () {return this.isAuthenticated ? this.userInfo.username : '登录/注册'},
            // 手机号
            mobile () {return this.isAuthenticated ? this.userInfo.mobile : '登录后享受更多特权'},
            // 优惠
            gift () {return this.isAuthenticated ? this.userInfo.gift_amount : -1},
            // 积分
            point () {return this.isAuthenticated ? this.userInfo.point : -1}
        },
        async mounted () {
            const user = await this.currentUserAction();
            if (user.userid) {
                await this.userInfoAction();
            }
        },
        methods: {
            ...mapActions([
                'currentUserAction',
                'userInfoAction'
            ]),
            myProfile () {
                if (this.isAuthenticated) {
                    this.$router.push('/profile/info');
                } else {
                    this.$router.push('/login');
                }

            }
        },
        components: {
            loading,
            headerBar,
            footerBar,
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../style/mixin';
.page {
    @include page;
}
.profile-box {
    @include flex;
    @include flex-align();
    @include bgimg;
    padding: 2rem 1.2rem;
    color: #fff;
    .profile-avatar {
        @include wh(4.6rem, 4.6rem);
        background-color: #fff;
        border-radius: 50%;
        svg {
            @include wh(4.6rem, 4.6rem);
        }
    }
    .profile-login {
        margin: 0 0 0 1.3rem;
        @include item-flex();
        p.t {
            margin: 0 0 .8rem;
            color: #fff;
            font-size: 1.8rem;
        }
        p.s {
            @include flex();
            @include flex-align();
            span {
                margin: 0 0 0 .3rem;
                color: #fff;
                font-size: 1.1rem;
            }
        }
        svg {
            @include wh(1.2rem, 1.2rem);
            vertical-align: middle;
        }
    }
    .profile-arrow {
        @include wh(.9rem, .9rem);
        svg {
            @include wh(100%, 100%);
        }
    }
}
.profile-info {
    display: table;
    width: 100%;
    height: 6.8rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    a {
        position: relative;
        display: table-cell;
        @include wh(50%, 100%);
        vertical-align: middle;
        text-align: center;
    }
    a:first-child:after {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        @include wh(1px, 100%);
        background-color: #ddd;
    }
    svg {
        @include wh(2.2rem, 2.2rem);
    }
    p.count {
        margin: 0 0 .5rem;
    }
    span {
        font-size: 1rem;
        em {
            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
        }
    }
    .benefit-amount {
        em {
            color: #ff5f3e;
        }
    }
    .point-amount {
        em {
            color: #6ac20b;
        }
    }
}
.profile-center {
    margin: 1rem 0 0;
    background-color: #fff;
    a {
        @include flex();
        @include flex-align();
        padding: 0 0 0 1rem;
    }
    aside[class*="icon-"] {
        @include wh(1.4rem, 1.4rem);
        margin: 0 1rem 0 0;
        svg {
            @include wh(100%, 100%);
        }
    }
    .cont {
        @include flex();
        @include flex-align();
        @include item-flex();
        @include flex-justify();
        padding: 1rem 1rem 1rem 0;
        line-height: 1.5rem;
        font-size: 1.1rem;
        border-bottom: #ddd solid 1px;
        .arrow {
            @include wh(.9rem, .9rem);
            svg {
                @include wh(100%, 100%);
                fill: #999;
            }
        }
    }
    a:last-child .cont {
        border-bottom: 0;
    }

}
</style>
