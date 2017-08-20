<template>
    <!-- <div class="entry-wrap" :class="{loading: !entryList.length}"> -->
        <swipe class="entry-swipe" :auto="0">
            <swipe-item class="item" v-for="(list, index_0) in entryList" :key="index_0">
                <router-link :to="{ path: 'msite/food/' + item.link }" v-for="(item, index_1) in list" :key="index_1">
                    <img :src="item.image_src">
                    <span class="title">{{item.name}}</span>
                </router-link>
            </swipe-item>
        </swipe>
    <!-- </div> -->
</template>

<script>
    import { Swipe, SwipeItem } from 'vue-swipe'
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
		name: 'entrySwipe',
        data () {
            return {
                // links: [],      // 分类链接
            }
        },
        computed: {
            ...mapGetters([
                'entries',
                'entryList'
            ]),
            // entryList () {return this.entries.reduce((v,i,s) => {return i <= 7})}
        },
        watch: {},
        mounted () {
            this.entriesAction();
        },
        methods: {
            ...mapActions(['entriesAction']),
        },
        components: {Swipe, SwipeItem}
    }
</script>

<style lang="scss" scoped>
@import '../../../style/mixin';
@import '../../../style/vue-swipe';

.entry-swipe {
    // height: 15rem;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    overflow: hidden;
    .mint-swipe-items-wrap {
        height: 13rem!important;
        .item,
        .item.is-active {
            // position: relative;
            // display: -webkit-flex;
            // display: flex;
            // -webkit-box-align: flex-start;
            // -webkit-align-items: flex-start;
            // -ms-flex-align: flex-start;
            // align-items: flex-start;
            // justify-content: center;
            // flex-wrap: wrap;
            width: 100%;
            height: 100%;
            color: #fff;
            a {
                float: left;
                padding: .9rem 0 0;
                display: block;
                width: 25%;
                height: 6.5rem;
                img {
                    display: block;
                    margin: 0 auto .5rem;
                    width: 3.7rem;
                    height: 3.7rem;
                }
            }
        }
    }

}

</style>
