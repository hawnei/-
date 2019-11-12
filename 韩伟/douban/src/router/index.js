import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import Audio from '@/pages/Audio/audio.vue'
import Broadcast from '@/pages/Broadcast/broadcast.vue'
import Group from '@/pages/Group/group.vue'
import Mine from '@/pages/Mine/mine.vue'
import Login from '@/components/login.vue'
import hello from '@/components/HelloWorld'
//二级路由
import Film from '@/pages/Broadcast/film'
import TV from '@/pages/Broadcast/tv'
import Read from '@/pages/Broadcast/read'
import City from '@/pages/Broadcast/city'
import Music from '@/pages/Broadcast/music'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Audio
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/audio',
            name: 'Audio',
            component: Audio
        },
        {
            path: '/broadcast',
            name: 'Broadcast',
            component: Broadcast,
            children: [{
                    path: 'film',
                    name: 'Film',
                    component: Film,
                },
                {
                    path: 'read',
                    name: 'Read',
                    component: Read,
                },
                {
                    path: 'tv',
                    name: 'TV',
                    component: TV,
                },
                {
                    path: 'city',
                    name: 'City',
                    component: City,
                },
                {
                    path: 'music',
                    name: 'Music',
                    component: Music,
                },
            ]
        },
        {
            path: '/group',
            name: 'Group',
            component: Group
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})