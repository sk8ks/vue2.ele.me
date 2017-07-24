<template>
    <section class="restaurant-list">
        <section class="item" v-for="(item, index_0) in restaurantList" :key="index_0">
            <div class="logo">
                <div class="new" v-if="item.is_new"><span>新店</span></div>
                <img :alt="item.name" :src="item.image_path">
            </div>
            <div class="info">
                <section class="">
                    <h3 class="name"><span>{{item.name}}</span></h3>
                    <div class="support">
                        <i v-for="(support, index_1) in item.supports" :key="index_1" v-if="support.id != 9" class="" style="color: rgb(153, 153, 153); border-color: rgb(221, 221, 221);">{{support.icon_name}}</i>
                    </div>
                </section>
                <section class="rating-sect">
                    <div class="rating-wraper">
                        <div class="rating">
                            <div class="rating-max">
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                            </div>
                            <div class="rating-count" :style="countRatingW(item.rating)">
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
                            </div>
                        </div>
                        <span class="rating-score">{{item.rating}}</span>
                        <span class="sales">月售{{item.recent_order_num}}单</span>
                    </div>
                    <div class="delivery">
                        <span class="icon-delivery" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
                    </div>
                </section>
                <section class="distribution-sect">
                    <div class="delivery">
                        <span>¥{{item.float_minimum_order_amount}}起送</span>
                        <span>配送费¥{{item.float_delivery_fee}}</span>
                        <span v-if="item.average_cost">{{item.average_cost}}</span>
                    </div>
                    <div class="dis-time">
                        <span class="distance">{{distance(item.distance)}}</span> <span class="time">{{item.order_lead_time}}分钟</span>
                    </div>
                </section>
                <section class="activities-sect">
                    <div class="activities-list">
                        <div class="activity-item" v-for="(active, index_2) in item.activities" :key="index_2" v-show="index_2 < 2 || item.activity_more_status">
                            <i class="icon-new" v-if="active.icon_name == '新'">{{active.icon_name}}</i>
                            <i class="icon-reduce" v-if="active.icon_name == '减'">{{active.icon_name}}</i>
                            <i class="icon-discount" v-if="active.icon_name == '特'">{{active.icon_name}}</i>
                            <i class="icon-discount" v-if="active.icon_name == '折'">{{active.icon_name}}</i>
                            <i class="icon-give" v-if="active.icon_name == '赠'">{{active.icon_name}}</i>
                            <span>{{active.description}}</span>
                        </div>
                        <div class="activity-bar" @click="activitySwitch(item)" v-if="item.activities.length > 2">{{item.activities.length}}个活动
                            <svg :class="{'activity-open': item.activity_more_status}">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                            </svg>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'restaurants',
        props: [],
        data () {
            return {
                // restaurants: [],    // 餐馆列表
                activityMoreStatus: !1,     // 更多活动显示状态
                busy: !1,
            }
        },
        computed: {
            ...mapGetters([
                'coordinates',
                'restaurantList'
            ]),
        },
        activated () {},
        mounted () {
            this.restaurantsAction();
        },
        methods: {
            ...mapActions(['restaurantsAction']),
            // 计算分数区域宽度
            countRatingW (rating) {
                return {width: (rating/5)*100+'%'}
            },
            // 格式化距离
            distance (dis) {
                return dis < 1000 ? dis + 'm' : (dis/1000).toFixed(2) + 'km';
            },
            // 活动显示开关
            activitySwitch (item) {
                // const activityMoreStatus = item.activity_more_status;
                item.activity_more_status = !item.activity_more_status
            },
            loadMore () {
                this.busy = 1;
                console.log('loading... ' + new Date());
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
.restaurant-list {
    padding: 0 0 4rem;

    .item {
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: flex-start;
        -webkit-align-items: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        // justify-content: center;
        // flex-wrap: wrap;
        border-bottom: 1px solid #eee;
        background-color: $fc;
        .logo {
            position: relative;
            padding: 1rem;
            img {
                @include wh(5rem, 5rem);
            }
            .new {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 50;
                @include wh(2.5rem, 2.5rem);
                background-image: -webkit-linear-gradient(315deg,#26ce61,#26ce61 50%,transparent 0);
                background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
                span {
                    position: absolute;
                    top: .5rem;
                    left: .1rem;
                    display: block;
                    color: #fff;
                    font-size: .7rem;
                    font-weight: 700;
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }
        }
        .info {
            padding: 1rem 1rem 1rem 0;
            @include flex();
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            section {
                @include flex();
                @include flex-align(center);
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                margin: .6rem 0 0;
            }
            section:first-child {
                margin: 0;
            }
            .distribution-sect {
                font-size: .9rem;
                .delivery, .dis-time {
                    @include flex();
                    span {color: #666;}
                    span+span:before {
                        margin: 0 .2rem 0 .2rem;
                        color: #ddd;
                        content: "/";
                    }
                    .time {color: #2395ff}
                }
            }
            .activities-sect {
                .activities-list {
                    position: relative;
                    width: 100%;
                    padding: .6rem 0 0;
                    border-top: #eee solid 1px;
                    .activity-item {
                        @include flex();
                        margin: .2rem 0 0;
                        height: 1.3rem;
                        line-height: 1.3rem;
                        font-size: .8rem;
                        [class*=icon-] {
                            margin: .2rem .4rem 0 0;

                            line-height: 1;
                            width: .9rem;
                            height: .9rem;
                            display: inline-block;
                            text-align: center;
                            // border: 1px solid;
                            border-radius: .15rem;
                            color: $fc;
                            font-size: .8rem;
                        }
                        .icon-new {
                            background-color: rgb(112, 188, 70);
                            // border-color: rgb(112, 188, 70);
                        }
                        .icon-reduce {
                            background-color: rgb(240, 115, 115);
                            // border-color: rgb(240, 115, 115);
                        }
                        .icon-discount {
                            background-color: rgb(241, 136, 79);
                            // border-color: rgb(241, 136, 79);
                        }
                        .icon-give {
                            background-color: rgb(60, 199, 145);
                        }
                        span {
                            color: #999;
                        }
                    }
                    .activity-item:first-child {
                        padding: 0 5rem 0 0;
                    }
                    .activity-bar {
                        position: absolute;
                        top: .9rem;
                        right: 0;
                        // padding: .5rem 0 .4rem;
                        height: 1.2rem;
                        color: #999;
                        text-align: right;
                        font-size: .8rem;
                        line-height: 1.2rem;
                        svg {
                            margin: 0 0 0 .2rem;
                            width: .5rem;
                            height: .5rem;
                            opacity: .9;
                            -webkit-transition: all .3s ease-in-out;
                            transition: all .3s ease-in-out;
                            -webkit-transform: rotate(0deg);
                            transform: rotate(0deg);
                            fill: currentColor;
                            will-change: transform;
                        }
                        .activity-open {
                            -webkit-transform: rotate(180deg);
                            transform: rotate(180deg);
                        }
                    }
                }
            }
            h3 {
                margin: 0;
                padding: 0;
                @include flex();
                @include flex-align(center);
                max-width: 15rem;
                height: 1.3rem;
                color: #333;
                font-weight: 700;
                font-size: 1.2rem;
                span {
                    color: #333;
                    font-weight: 700;
                    // font-size: 1.2rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            h3:before {
                margin-right: .4rem;
                padding: 0 .3rem;
                height: 1.2rem;
                border-radius: .2rem;
                background-color: #ffd930;
                color: #52250a;
                content: "\54C1\724C";
                vertical-align: top;
                text-align: center;
                white-space: nowrap;
                font-weight: 700;
                font-size: .9rem;
                line-height: 1.2rem;
            }
            .support {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: end;
                -webkit-justify-content: flex-end;
                -ms-flex-pack: end;
                justify-content: flex-end;
                i {
                    height: 1rem;
                    font-size: .9rem;
                    margin: 0 0 0 .3rem;
                    // background-color: #eee;
                    border: #eee solid 1px;
                }
            }
            .rating-wraper {
                @include flex();
                @include flex-align(center);
                font-size: .9rem;
                .rating {
                    position: relative;
                    margin: 0 .5rem 0 0;

                    @include flex();
                    .rating-max {
                        @include flex();
                        // width: 4rem;
                    }
                    .rating-count {
                        position: absolute;
                        @include flex();
                        overflow: hidden;
                        svg {
                            fill: #ffaa0c;
                        }
                    }
                    svg {
                        display: block;
                        margin: 0 1px;
                        -webkit-box-flex: 0;
                        -webkit-flex: none;
                        -ms-flex: none;
                        flex: none;
                        width: .8rem;
                        height: .8rem;
                        fill: #ddd;
                    }
                }
                .rating-score {
                    margin: 0 .5rem 0 0;
                    color: #ff6600;
                }
                .rating-count {
                    color: #999;
                }
            }
            .delivery {
                @include flex();
                .icon-delivery {
                    padding: 0 .1rem;
                    border: 1px solid #44a5ff;
                    border-radius: .2rem;
                    background-color: #fff;
                    color: #2395ff;
                    font-size: .9rem;
                    line-height: 1.2rem;
                    background-color: #2395ff;
                    color: #fff;
                    span {
                        background-color: #2395ff;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
