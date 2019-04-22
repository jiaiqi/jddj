<template>
    <div>
        <user-header />
        <user-section />
    </div>
</template>



<script> 
    import '../assets/css/user.css'
    import header from "../components/user/user-header.vue"
    import usersection from '../components/user/user-section.vue';
    
    export default {
        components:{
        "user-header":header,
        "user-section":usersection,
        }
    }
</script>


<style scoped>

</style>

