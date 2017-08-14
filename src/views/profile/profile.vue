<template>
    <div class="page">
        <profile v-if="profile"></profile>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import {
        serializeObject,
        array2Object
    } from 'components/common/utils'
    import profile from 'views/profile/children/profile'

    export default {
		name: 'profile-view',
        computed: {
            profile () {
                return this.$route.name == 'profile';
            }
        },
        mounted () {},
        components: {
            profile
        }
    }
</script>
