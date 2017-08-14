<template>
    <div class="page">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 547 987" id="arrow-right" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></symbol>
            </defs>
        </svg>
        <header-bar title="订单"></header-bar>
        <section>
            <div class="no-data-wrapper no-data" v-if="!authenticated">
                <img src="/static/img/9fb04779371b5b162b41032baf5f3gif.gif" />
                <p>请登录后查看外卖订单</p>
                <router-link :to="{ name: 'login', query: {redirect: '/order'} }" class="login-btn">立即登录</router-link>
            </div>
            <div class="no-data-wrapper no-data" v-if="authenticated">
                <img src="/static/img/4efda8c6bf4734d39faf86fe190c3gif.gif" />
                <p>近三个月无外卖订单记录</p>
                <section>
                    <span class="history-btn">
                        查看三个月前的外卖订单
                        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
                    </span>
                </section>
            </div>
        </section>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import headerBar from 'components/header/headerBar'
    import footerBar from 'components/footer/footerBar'
    import loading from 'components/common/loading'
    export default {
        name: 'order',
    	data(){
            return{

            }
        },
        computed: {
            ...mapGetters(['authenticated'])
        },
        async mounted (){
            console.log(this.$route)
            await this.currentUserAction();
            if (this.authenticated) {
                this.userOrdersAction({
                    limit: 10,
                    offset: 0
                }).then(res => {

                })
            }

        },
        methods: {
            ...mapActions([
                'currentUserAction',
                'userInfoAction',
                'userOrdersAction'
            ]),
        },
        components: {
            headerBar,
            footerBar,
            loading
        }
    }

</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.page {
    @include page;
}
.no-data-wrapper {
    @include flex;
    @include center;
    @include flex-direction(column);
    @include flex-align;
    @include wh(100%, 60%);
    font-size: 1.3rem;
    img {
        display: block;
        margin: 0 auto;
    }
    p {
        margin: 1.1rem 0;
        line-height: 1.6rem;
        font-size: 1.4rem;
        color: #666;
    }
    .login-btn {
        padding: .8rem;
        min-width: 9rem;
        border: 0;
        border-radius: .1rem;
        background-color: #56d176;
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        font-family: inherit;
    }
}
.no-data-wrapper.no-data {
    img {
        @include wh(16rem, 16rem);
    }
    .history-btn {
        color: #999;
        font-size: 1rem;
        svg {
            margin-left: .5rem;
            @include wh(.6rem, .6rem);
            @include transform(rotate(90deg));
        }
    }
}
</style>
