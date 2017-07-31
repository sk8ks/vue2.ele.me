
import {geoLocation} from './geo'

export default {
    methods: {
        geoLocation: geoLocation,
        noScroll (flag) {
            // 有遮罩层情况下禁止背景内容滚动
            document.querySelector('body').className = flag ? 'no-scroll' : '';
        }
    }

}
