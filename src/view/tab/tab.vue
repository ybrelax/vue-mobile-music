<template>
    <div class="nav">
    
        <router-link to="/recommend">
    
            <span :class="routerPath == '/recommend' ? 'nav-active' : '' "> 推荐 </span>
    
        </router-link>
    
        <router-link to="/">
    
            <span :class="routerPath == '/rank' ? 'nav-active' : '' ">排行 </span>
    
        </router-link>
    
        <router-link to="/singer">
    
            <span :class="routerPath == '/singer' ? 'nav-active' : '' "> 歌手 </span>
    
        </router-link>
    
    </div>
</template>

<script>

export default {

    data() {
        return {
            routerPath: '/recommend'
        }
    },
    watch: {
       '$route' (to, from) {
           this.routerPath = to.fullPath;
        }
    }
}
</script>