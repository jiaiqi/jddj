<template>
    <section>
        <userdata/>
        <user-wallet/>
        <dj-user-section-redbag/>
        <dj-user-section-list/>
        <dj-user-section-logout/>
    </section>
</template>



<script>
// import  '../../assets/css/user.css';

    import redbag from "../user/redbag.vue"
    import list from "../user/user-list.vue"
    import logout from "../user/logout.vue"
    import userdata from '../user/user-data.vue'
    import userwallet from '../user/user-wallet.vue'

    export default {
        components:{
            'userdata':userdata,
        'user-wallet':userwallet,
        "dj-user-section-redbag":redbag,
        "dj-user-section-list":list,
        "dj-user-section-logout":logout
        }
    }
</script>



<style scoped>

</style>

