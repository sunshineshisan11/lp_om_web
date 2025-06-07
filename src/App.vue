<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Login from './login.vue'
import TabBar from './components/TabBar.vue';
import {
	ref,
	onBeforeMount,
	computed,
	onMounted,
	onUnmounted
} from 'vue';
import {
	useRoute,
	RouterLink,
	RouterView,
	useRouter
} from 'vue-router';
import mainVue from './views/main.vue';
import mineApi from './api/mine';
import {
	message
} from 'ant-design-vue';
import {
	useCounterStore
} from './store/index';
import { mixin } from './mixin/index.js';
import en from './locales/en.js';
import zh from './locales/zh.js';
import jp from './locales/jp.js';
import ko from './locales/ko.js';
import vi from './locales/vi.js';
const langs = {
	en,
	zh,
	jp,
	ko,
	vi
}
let lang = langs[localStorage.getItem('language')]
// const { getUser } = mixin();
const store = useCounterStore();

const route = useRoute();
const router = useRouter();
const isLoginPage = ref(false);
router.push('/main')
const loginRouteFlag = computed(() => {
	return route.name === 'login';
});
console.log(loginRouteFlag)
onBeforeMount(() => {
	if (route.name === 'login') {
		isLoginPage.value = true;
	}
});
const user = ref({})
const getUser = () => {
	console.log('子组件被激活了');
	mineApi.get_user({
		account: JSON.parse(localStorage.getItem('user')).account
	}).then(res => {
		if (res.code == 0) {
			const user = res.rows[0]
			console.log(user)
			delete user.password
			store.user = user
			localStorage.setItem('user', JSON.stringify(user))
		} else {
			message.error('fail');
		}
	})
}
if (localStorage.getItem('user')) {
	user.value = JSON.parse(localStorage.getItem('user'))
	getUser()
}
// let timer
// onMounted(() => {
// 	timer = setInterval(() => {
		
// 	}, 10000)
// })
// onUnmounted(() => {
// 	clearInterval(timer)
// })
//客服
// const addSerive = () => {
// 	mineApi.userInCode({
// 		inviteCode: store.user.inviteCode
// 	}).then(res => {
// 		console.log(res.rows[0])
// 		if (res.code == 0) {
// 			location.href = 'https://line.me/ti/p/~' + res.rows[0].lineCode
// 		} else {
// 			message.error(res.error)
// 		}
// 	})
// }
</script>

<template>
	<div>
		<RouterView />
		<!-- <div v-if="loginRouteFlag!=true&&store.user.inviteCode!=1208" class="service" @click="addSerive">{{lang.tabbar.service}}/div> -->
		<TabBar v-if="!isLoginPage" />
	</div>
</template>

<style>
@import url(css/common.css);
@import url(css/components.css);

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
	color: white;
	font-weight: bold;
}

body {
	margin: 0;
}

/* 底部tab隐藏 */
#app.hide-tab-bar .tab-bar {
	display: none;
}

.main {
	background-color: #f2f2f5;
	/* padding: 20px 20px 60px; */
	box-sizing: border-box;
	position: relative;
	z-index: 1;
	/* margin-bottom: 80px; */
	color: #fff !important;
}

.service {
	position: absolute;
	top: 30px;
	left: 0;
	z-index: 2;
	color: black !important;
	background-color: #fff;
	padding: 10px;
	padding-right: 15px;
	border-top-right-radius: 80px;
	border-bottom-right-radius: 80px;
}
</style>