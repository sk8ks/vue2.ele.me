<template>
    <div class="page page-aside">
        <div class="header-aside">
            <header-bar :title="categoryTitle"></header-bar>
            <aside-filter
                v-on:loadingShow="loadingShow"
                v-on:loadingHide="loadingHide"></aside-filter>
        </div>
        <restaurant-list
            v-on:loadingShow="loadingShow"
            v-on:loadingHide="loadingHide"></restaurant-list>
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
    import asideFilter from 'components/asideFilter/asideFilter'
    import restaurantList from 'components/common/restaurantList'
    import loading from 'components/common/loading'

    export default {
		name: 'categories',
        data () {
            return {
                categoryTitle: '',  // 分类标题
            }
        },
        computed: {},
        mounted () {
            const ctx = this;
            const hash = this.$route.hash.substr(1).split('#');
            const hashArray = array2Object(hash.map((v,i,a) => serializeObject(v)));
            this.categoryTitle = hashArray.target_name;
        },
        methods: {
            loadingShow () {
                this.$refs.loading.show();
            },
            loadingHide () {
                this.$refs.loading.hide();
            }

        },
        components: {
            loading,
            headerBar,
            asideFilter,
            restaurantList
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.page {
    @include page;
}
.page-aside {
    padding-top: 7.06667rem;
}
.header-aside {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 900;
    @include wh(100%, 6.66667rem);
}
</style>
