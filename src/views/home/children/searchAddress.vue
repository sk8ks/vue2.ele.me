<template>
    <popup
        slotname="searchAddress"
        :mode="mode"
        ref="popup">
        <div class="address-panel" slot="searchAddress">
            <header class="address-header">
                <div class="head-wrapper">
                    <button class="btn-back" @click="popupClose"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use></svg></button>
                    <h1 class="title">选择地址</h1>
                </div>
            </header>
            <section class="search-sect">
                    <input type="search" placeholder="请输入地址" autofocus="autofocus" class="" @keyup.13="searchAddressNearby" v-model="address">

            </section>
            <section class="address-list" v-if="addressList.length">
                <div class="item" v-for="(address, index) in addressList" @click="updateAddress">
                    <h6 class="title">{{address.name}}</h6>
                    <p class="info">{{address.address}}</p>
                </div>
            </section>
        </div>
    </popup>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import {eventHub} from 'components/common/eventHub'
    import popup from 'components/popup/popup'
    export default {
        name: 'search-address',
        props: ['mode'],
        data () {
            return {
                address: '',        //
                addressList: [],
            }
        },
        computed: {
            ...mapGetters([
                'coordinates'
            ]),
        },
        created () {
            eventHub.$on('searchAddressOpen', this.popupOpen)
        },
        mounted () {

        },

        methods: {
            ...mapActions([
                'searchAddressNearbyAction',
                'geolocationAction',
				'hotSearchWordsAction',
                'entriesAction',
                'restaurantsAction',
            ]),
            popupOpen () {
                eventHub.$emit('popupOpen');
            },
            popupClose () {
                eventHub.$emit('popupClose');
                this.address = '';
            },
            searchAddressNearby () {
                this.searchAddressNearbyAction({keyword: this.address}).then(res => this.addressList = res)
            },
            // 点击地址更新
            updateAddress () {
                // 更新地址
                this.geolocationAction();
                // 更新热搜词
                this.hotSearchWordsAction();
                // 更新分类
                this.entriesAction();
                // 更新餐馆
                this.restaurantsAction();
                this.close();
            }
        },
        components: {popup}
    }
</script>
<style lang="scss" scoped>
@import '../../../style/mixin';
.address-panel {
    // @include popup;
}
.address-header {
    position: relative;
    @include flex();
    @include flex-align();
    @include flex-justify();
    width: 100%;
    height: 3.666667rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
    .head-wrapper {
        @include flex();
        @include flex-align();
        @include wh;
        @include bgimg;
        .title {
            padding: 0 3.666667rem;
            width: 100%;
            line-height: 3.666667rem;
            text-align: center;
            @include font(1.4rem, 3.666667rem);
            color: $fc;
        }
        .btn-back {
            position: absolute;
            left: 0;
            width: 3.666667rem;
            height: 100%;
            background-color: transparent;
            svg {
                width: 50%;
                height: 50%;
                fill: $fc;
            }
        }
    }
}
.search-sect {
    padding: .4rem 2rem 1rem;
    @include bgimg;
    input[type="search"] {
        // margin-top: .4rem;
        @include wh(100%, 2.5rem);
        border-radius: 2.5rem;
        padding: 0 1.5rem;
        font-size: 1.1rem;
        color: #333;
    }
    input[type=search]::-webkit-input-placeholder{
        color: #333;
    }
    input[type=search]::-webkit-search-cancel-button{
        // -webkit-appearance: none;
        // position: relative;
        // @include wh(1.2rem, 1.2rem);
        // border-radius: 50%;
        // background-color: #ebebeb;
    }
}
.address-list {
    .item {
        padding: .6rem 1.2rem;
        border-top: #eee solid 1px;
        .title {
            @include font(1.2rem, 2rem);
            font-weight: 500;
        }
        .info {
            @include font(1rem, 1rem);
            color: #999;
        }
    }
}
</style>
