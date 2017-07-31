<template>
    <aside class="aside-filter">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 33 32" id="default" width="100%" height="100%">
                    <path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"></path>
                </symbol>
                <symbol viewBox="0 0 32 32" id="distance" width="100%" height="100%"><path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"></path><path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path></symbol>
                <symbol viewBox="0 0 23 32" id="hot" width="100%" height="100%">
                    <path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path>
                </symbol>
                <symbol viewBox="0 0 32 32" id="price" width="100%" height="100%"><path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path></symbol>
                <symbol viewBox="0 0 32 32" id="speed" width="100%" height="100%"><path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path></symbol>
                <symbol viewBox="0 0 33 32" id="rating" width="100%" height="100%"><path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path></symbol>
                <symbol viewBox="0 0 32 32" id="fengniao" width="100%" height="100%">
                    <path fill="#27a9e1" d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"></path><path fill="#b8e5fa" d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"></path><path fill="#0089cf" d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"></path><path fill="#0089cf" d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"></path><path fill="#0089cf" d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"></path>
                </symbol>
                <symbol viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></symbol>
            </defs>
        </svg>
        <div class="filter-header">
            <a class="nav" @click="filterCategoryOpen(1)" :class="{active: navOpenStatus == 1}">
                <span>{{categoryName}}</span>
                <svg :class="{open: navOpenStatus}">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                </svg>
            </a>
            <a class="nav" @click="filterCategoryOpen(2)" :class="{active: navOpenStatus == 2}">
                <span>{{sortName}}</span>
                <svg :class="{open: navOpenStatus}">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                </svg>
            </a>
            <a class="nav" @click="filterCategoryOpen(3)" :class="{active: navOpenStatus == 3}">
                <span>筛选</span>
                <svg :class="{open: navOpenStatus}">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                </svg>
            </a>
        </div>
        <section class="filter-wrapper filter-category" :class="{open: navOpenStatus == 1}">
            <div class="filter-box">
                <ul class="left-category">
                    <li v-for="(category, index) in categories" :keys="index" @click="selectCategory(category, index)" :class="{active: index == currentCategoryIndex}">
                        <span>{{category.name}}</span>
                        <span class="count">{{category.count}}</span>
                    </li>
                </ul>
                <ul class="right-category">
                    <li v-for="(subCategory, index) in subCategories" :keys="index" @click="selectSubCategory(subCategory, index)" :class="{active: index == currentSubCategoryIndex}">
                        <img class="icon" :src="subCategory.image" />
                        <span>{{subCategory.name}}</span>
                        <span class="count">{{subCategory.count}}</span>
                    </li>
                </ul>
            </div>
        </section>

        <section class="filter-wrapper filter-sort" :class="{open: navOpenStatus == 2}">
            <ul>
                <li class="" v-for="(sort, index) in filterSort" @click="selectSort(sort)">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="sort.svg"></use>
                    </svg>
                    <span>{{sort.name}}</span>
                    <svg class="selected" v-show="querySortOrder == sort.id"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
                </li>
            </ul>
        </section>

        <section class="filter-wrapper filter-prop" :class="{open: navOpenStatus == 3}">
            <div>
                <dl>
                    <dt>配送方式</dt>
                    <dd v-for="(delivery, index) in filterDelivery" @click="selectDelivery(delivery.id)" :class="{selected: selectedDelivery == delivery.id}">
                        <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="delivery.svg"></use></svg>
                        <svg class="selected"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
                        <span>{{delivery.name}}</span>
                    </dd>
                </dl>
                <dl>
                    <dt>商家属性(可多选)</dt>
                    <dd v-for="(prop, index) in filterProp" @click="selectProp(prop.id)" :class="{selected: selectedProp.indexOf(prop.id) > -1}">
                        <i class="icon" :style="{borderColor: prop.color, color: prop.color}">{{prop.icon}}</i>
                        <svg class="selected"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
                        <span>{{prop.name}}</span>
                    </dd>
                </dl>
            </div>
            <div class="filter-btn">
                <a href="javascript:" class="reset" @click="resetProp">清空</a>
                <a href="javascript:" class="ok" @click="submitFilterProp">确定<span></span></a>
            </div>
        </section>
        <div class="modal" :class="{active: !!navOpenStatus}" @click="closeAsideFilter"></div>
    </aside>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import {
        serializeObject,
        array2Object,
    } from 'components/common/utils'
    import mixins from 'components/mixin'
    import loading from 'components/common/loading'
    import {filterSort, filterDelivery, filterProp} from './filter'

    export default {
        name: 'aside-filter',
        data () {
            return {
                navOpenStatus: 0,  // 菜单状态
                loadingStatus: !1,  // 加载状态

                categories: [],     // 分类数据
                subCategories: [], // 子分类
                currentCategoryIndex: 0,   // 当前分类索引
                currentSubCategoryIndex: 0, // 当前子分类索引
                categoryName: '分类',     // 选中的分类名
                sortName: '排序',     // 排序名称
                filterSort: filterSort,     // 排序字段
                filterDelivery: filterDelivery, // 配送字段
                filterProp: filterProp,     // 筛选字段
                selectedDelivery: '',    // 选中的配送方式
                selectedProp: [],     // 选中的商家属性

                queryCategoryIds: '',   // 分类编号
                querySortOrder: -1,   // 排序参数
                queryDelivery: '',      // 配送字段
                queryExtras: 'activities',  // 附加参数
            }
        },
        watch: {
            navOpenStatus () {
                this.noScroll(!!this.navOpenStatus);
            }
        },
        mixins: [mixins],
        methods: {
            ...mapActions([
                'categoryAction',
                'filterRestaurantsAction'
            ]),
            /**
             * 菜单切换
             * @param  {Number} index [description]
             * @return {[type]}       [description]
             */
            filterCategoryOpen (index) {
                this.navOpenStatus = index == this.navOpenStatus ? 0 : index;
                if (!this.categories.length) {
                    this.categoryAction().then(res => this.categories = res);
                }
            },
            /**
             * 点击选择左侧主分类
             * @param  {Object} [category={}] [description]
             * @param  {Number} [index=0]     [description]
             * @return {[type]}               [description]
             */
            selectCategory (category = {}, index = 0) {
                this.subCategories = category.sub_categories || [];
                this.currentCategoryIndex = index;
                // 全部商家直接查询
                if (this.currentCategoryIndex == 0) {
                    this.selectSubCategory(category);
                }
            },
            /**
             * 点击子分类并更新餐馆列表
             * @param  {Object} [subCategory={}] [description]
             * @return {[type]}                  [description]
             */
            selectSubCategory (subCategory = {}, index = -1) {
                this.navOpenStatus = 0;
                this.queryCategoryIds = subCategory.id || '';
                this.categoryName = subCategory.name;
                this.currentSubCategoryIndex = index;
                this.$emit('loadingShow');
                this.filterRestaurantsAction({
                    ['extras[]']: this.queryExtras,
                    ['restaurant_category_ids[]']: this.queryCategoryIds,
                    order_by: this.querySortOrder
                })
                .then(() => {
                    this.$emit('loadingHide');
                })

            },

            /**
             * 选择排序
             * @param  {String} order [description]
             * @return {[type]}       [description]
             */
            selectSort (order) {
                this.navOpenStatus = 0;
                this.querySortOrder = order.id;
                this.sortName = order.name;
                this.$emit('loadingShow');
                this.filterRestaurantsAction({
                    ['extras[]']: this.queryExtras,
                    ['restaurant_category_ids[]']: this.queryCategoryIds,
                    order_by: this.querySortOrder
                })
                .then(() => {
                    this.$emit('loadingHide');
                });
            },

            /**
             * [selectDelivery description]
             * @param  {String} delivery [description]
             * @return {[type]}          [description]
             */
            selectDelivery (delivery) {
                this.selectedDelivery = this.selectedDelivery == delivery ? '' : delivery;
            },

            /**
             * [selectProp description]
             * @param  {String} prop [description]
             * @return {[type]}      [description]
             */
            selectProp (prop) {
                if (this.selectedProp.indexOf(prop) > -1) {
                    this.selectedProp = this.selectedProp.reduce((p,c,i,a) => {console.log(p, c)
                        if (c != prop) p.push(c);
                        return p;
                    }, []);
                }else {
                    this.selectedProp.push(prop);
                }
            },

            /**
             * 清空商家属性
             */
            resetProp () {
                this.selectedDelivery = '';
                this.selectedProp = [];
            },

            /**
             * 根据商家属性筛选
             * @return {[type]} [description]
             */
            submitFilterProp () {
                this.navOpenStatus = 0;
                this.$emit('loadingShow');
                this.filterRestaurantsAction({
                    ['extras[]']: this.queryExtras,
                    ['restaurant_category_ids[]']: this.queryCategoryIds,
                    order_by: this.querySortOrder,
                    ['support_ids[]']: this.selectedProp,
                    ['delivery_mode[]']: this.selectedDelivery,
                })
                .then(() => {
                    this.$emit('loadingHide');
                });
            },
            closeAsideFilter () {
                this.navOpenStatus = 0;
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
        @include wh(100%, 100%);
        background-color: rgba(0,0,0,.2);
        @include transition(.3s);
        opacity: 0;
        visibility: hidden;
    }
    .modal.active {
        opacity: 1;
        visibility: visible;
    }
    .aside-filter {
        position: relative;
        // top: 3.66667rem;
        height: 3.4rem;
        line-height: 3.4rem;
        border-bottom: 1px solid #ddd;
        background: #fff;
        .filter-header {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            @include flex;
            z-index: 10;
            background-color: $fc;
            .nav {
                position: relative;
                @include item-flex;
                text-align: center;
                font-size: 1.1rem;
                span {
                    color: #666;
                }
                svg {
                    width: .6rem;
                    height: .4rem;
                    margin-bottom: .1rem;
                    fill: #999;
                    will-change: transform;
                    @include transition(.3s);
                }
            }
            .nav.active {
                color: #3190e8;
                span {
                    color: currentColor;
                }
                svg {
                    fill: currentColor;
                    @include transform(rotate(180deg));
                }
            }
        }
    }
    .filter-wrapper {
        @include abs(0, 0, 100%, auto);
        z-index: 20;
        // @include flex;
        max-height: 0;
        border-top: 1px solid #ddd;
        @include transition(.2s, ease-in-out);
        background-color: $fc;
        visibility: hidden;
        overflow: auto;
        opacity: 0;
        .filter-box {
            @include flex;
            @include wh(100%, 100%);
            ul {
                overflow: auto;
                li {
                    position: relative;
                    @include flex;
                    padding: 0 .8rem 0 1rem;
                    justify-content: flex-start;
                    align-items: center;
                    line-height: 3.4rem;
                    span {
                        color: #666;
                        font-size: 1rem;
                    }
                    .count {
                        // position: absolute;
                        @include ct;
                        right: 1rem;
                        padding: 0 .4rem;
                        height: 1.2rem;
                        border: #e6e6e6 solid 1px;
                        border-radius: 1rem;
                        background-color: #fff;
                        line-height: 1.2rem;
                        text-align: center;
                        font-size: .85rem;
                    }
                }
                li.active {
                    background-color: $fc;
                }
            }
            .left-category {
                @include item-flex(3);
                background-color: #f9f9f9;

            }
            .right-category {
                @include item-flex(5);
                li.active {
                    span {
                        color: #3190e8;
                    }
                }
                .icon {
                    @include wh(2rem, 2rem);
                }
                span {
                    margin: 0 0 0 1rem;
                }
            }

        }
    }
    .filter-wrapper.open {
        opacity: 1;
        visibility: visible;
        max-height: 1000%;
    }
    .filter-wrapper.filter-category {
        height: 1000%;
    }
    .filter-wrapper.filter-sort {
        ul {
            width: 100%;
            li {
                position: relative;
                line-height: 4rem;
                padding: 0 1rem 0 1.2rem;
                svg {
                    @include wh(1.3rem, 1.3rem);
                    margin-right: .8rem;
                    vertical-align: middle;
                }
                svg.selected {
                    @include ct;
                    right: 0;
                }
            }
            li:after {
                position: absolute;
                content: "";
                bottom: 0;
                left: 3rem;
                right: 0;
                height: 1px;
                background-color: #eee;
            }
            li.active {
                span {
                    color: #0089dc;
                }
            }
        }
    }
    .filter-wrapper.filter-prop {
        dl {
            padding: 1rem;
            overflow: hidden;
            dt {
                margin: 0 0 1rem;
                line-height: 1.2rem;
            }
            dd {
                float: left;
                margin: 0 2.3% .5rem 0;
                padding: 0 1rem;
                width: 31%;
                line-height: 3rem;
                border: #ddd solid 1px;
                border-radius: 6px;
                i.icon {
                    display: inline-block;
                    @include wh(1.6rem, 1.6rem);
                    vertical-align: middle;
                    text-align: center;
                    border: #999 solid 1px;
                    border-radius: 5px;
                    line-height: 1.4rem;
                }
                svg.icon {
                    display: inline-block;
                }
                svg.selected {
                    display: none;
                }
            }
            dd.selected {
                border-color: #a2d2ff;
                color: #3190e8;
                background-color: #edf5ff;
                .icon {
                    display: none;
                }
                svg.selected {
                    display: inline-block;
                }
                span {
                    color: #3190e8;
                }
            }
        }
        .filter-btn {
            padding: .6rem;
            @include flex;
            background-color: #fafafa;
            text-align: center;
            font-size: 1.5rem;
            a {
                @include item-flex();
                border: #ddd solid 1px;
                border-radius: 5px;
            }
            .reset {
                margin: 0 1rem 0 0;
            }
            .ok {
                background-color: #56d176;
                border: #56d176 solid 1px;
                color: #fff;
                span {
                    color: #fff
                }
            }

        }
        svg {
            @include wh(1.3rem, 1.3rem);
            margin-right: .6rem;
            vertical-align: middle;
        }
    }
</style>
