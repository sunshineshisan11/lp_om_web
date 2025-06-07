<template>
	<div class="main">
		<div class="sec">
			<div class="man">
				<div class="avatar">
					<img :src="$domain + '/' + store.user.avatar" />
				</div>
				<div class="pz">
					<!-- 实例图片无效，暂时没删 -->
					<el-upload class="avatar-uploader" action="https://www.findyourflame.vip:168/upload/pz"
						:show-file-list="false" :before-upload="(file) => beforeUpload(file, 0)"
						:on-success="(response) => handleSuccess(response, 0)" :on-error="handleError">
						<img v-if="imageUrl[0]" :src="imageUrl[0]" class="avatarEdit" />
						<template v-else>
							<img v-if="store.user.pz" :src="$domain + '/' + store.user.pz" class="avatarEdit" />
							<template v-else>
								{{ lang.mine.upload[0] }}
							</template>
						</template>
					</el-upload>
				</div>
				<div class="pz">
					<el-upload class="avatar-uploader" action="https://www.findyourflame.vip:168/upload/pz"
						:show-file-list="false" :before-upload="(file) => beforeUpload(file, 1)"
						:on-success="(response) => handleSuccess(response, 1)" :on-error="handleError">

						<img v-if="imageUrl[1]" :src="imageUrl[1]" class="avatarEdit" />
						<template v-else>
							<img v-if="store.user.pz1" :src="$domain + '/' + store.user.pz1" class="avatarEdit" />
							<template v-else>
								{{ lang.mine.upload[1] }}
							</template>
						</template>
					</el-upload>
				</div>
				<div class="pz">
					<el-upload class="avatar-uploader" action="https://www.findyourflame.vip:168/upload/pz"
						:show-file-list="false" :before-upload="(file) => beforeUpload(file, 2)"
						:on-success="(response) => handleSuccess(response, 2)" :on-error="handleError">
						<img v-if="imageUrl[2]" :src="imageUrl[2]" class="avatarEdit" />
						<template v-else>
							<img v-if="store.user.pz2" :src="$domain + '/' + store.user.pz2" class="avatarEdit" />
							<template v-else>
								{{ lang.mine.upload[2] }}
							</template>
						</template>
					</el-upload>
				</div>
			</div>
			<div class="woman">
				<div class="avatar">
					<img :src="$domain + '/' + pairUser.avatar" />
				</div>
				<div class="pz">
					<img v-if="pairUser.pz" :width="100"
						:src="pairUser.pz ? $domain + '/' + pairUser.pz : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
						class="avatarEdit" alt="Avatar" />
				</div>
				<div class="pz">
					<img v-if="pairUser.pz1" :width="100"
						:src="pairUser.pz1 ? $domain + '/' + pairUser.pz1 : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
						class="avatarEdit" alt="Avatar" />
				</div>
				<div class="pz">
					<img v-if="pairUser.pz2" :width="100"
						:src="pairUser.pz2 ? $domain + '/' + pairUser.pz2 : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
						class="avatarEdit" alt="Avatar" />
				</div>
			</div>
		</div>
		<div class="foot"></div>
	</div>
</template>

<script setup>
import {
	useRouter,
	useRoute
} from 'vue-router';
import {
	ref,
	onMounted,
	onUnmounted,
	reactive,
	onBeforeMount
} from 'vue';
import {
	Carousel
} from 'ant-design-vue';
import mainApi from '../api/main.js'
import PLApi from '../api/PL.js'

import {
	ElNotification
} from 'element-plus'
import {
	message
} from 'ant-design-vue';
import en from '../locales/en.js';
import zh from '../locales/zh.js';
import jp from '../locales/jp.js';
import ko from '../locales/ko.js';
import vi from '../locales/vi.js';
const langs = {
	en,
	zh,
	jp,
	ko,
	vi
}
let lang = langs[localStorage.getItem('language')]
const router = useRouter();
const route = useRoute();
const user = JSON.parse(localStorage.getItem('user'))
if (!user) {
	router.replace('/login');
}
import {
	useCounterStore
} from '../store/index';
import mineApi from '../api/mine.js'
import { ElLoading } from 'element-plus'
const store = useCounterStore();

const userInfo = ref({})
const getUser = () => {
	mineApi.get_user({
		account: JSON.parse(localStorage.getItem('user')).account
	}).then(res => {
		if (res.code == 0) {
			const user = res.rows[0]
			console.log(user)
			delete user.password
			userInfo.value = user
			store.user = user
			console.log(store.user)
			localStorage.setItem('user', JSON.stringify(user))
		} else {
			message.error('fail');
		}
	})
}
//初始化用户信息
// getUser()
//查找配对女生
const pairUser = ref({})
PLApi.get_pair_list({
	pairId: store.user.account,
	gender: '女',
}).then(res => {
	console.log(res)
	if (res.code == 0) {
		pairUser.value = res.rows[0]||{}
	} else {
		message.error('fail')
	}
})
// mineApi.pairUser({
// 	inviteCode: store.user.inviteCode,
// 	vipGrade: 3
// }).then(res => {
// 	console.log(res)
// 	if (res.code == 0) {
// 		pairUser.value = res.rows[0]
// 	} else {
// 		message.error('fail')
// 	}
// })
// 存储头像图片的 URL
const imageUrl = ref([]);
// 存储提示消息
const messageEL = ref('');
// 存储消息类型
const messageType = ref('');
// 上传前的处理函数
const beforeUpload = async (file, index) => {
	const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)',
	})
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		messageEL.value = lang.mine.model.message[5]; //'只能上传 JPG/PNG 格式的图片！'
		messageType.value = 'error';
		return false;
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		messageEL.value = lang.mine.model.message[6]; //'图片大小不能超过 2MB！'
		messageType.value = 'error';
		return false;
	}
	const reader = new FileReader();
	reader.onload = (e) => {
		imageUrl.value[index] = e.target.result;
		userInfo.value[index == 0 ? 'pz' : index == 1 ? 'pz1' : 'pz2'] = imageUrl.value
	};
	reader.readAsDataURL(file);
	return true;
};
// 上传成功的处理函数
const handleSuccess = (response, index) => {
	//记录图片名
	console.log(response.file)
	if (response.code == 0) {
		let u = userInfo.value
		let obj = {}
		obj = index == 0 ? {
			pz: response.file,
		} : index == 1 ? {
			pz1: response.file,
		} : {
			pz2: response.file,
		}
		const loading = ElLoading.service({
			lock: true,
			text: 'Loading',
			background: 'rgba(0, 0, 0, 0.7)',
		})
		loading.close()
		mineApi.set_pz({
			...obj,
			account: JSON.parse(localStorage.getItem('user')).account
		}).then(res => {
			if (res.code == 0) {
				getUser()
			} else {
				message.error('fail')
			}
		})
	}
	console.log(response)
};
// 上传失败的处理函数
const handleError = () => {
	messageEL.value = lang.mine.model.message[7]; //'头像上传失败，请稍后重试！'
	messageType.value = 'error';
};
</script>

<style scoped>
.avatarEdit {
	width: 100px;
	height: 160px;
}

.sec {
	display: flex;
	justify-content: space-around;
	padding-bottom: 80px;
}

.sec>div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.sec>div>div {
	margin-top: 10px;
}

.avatar {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #585858;
}

.avatar img {
	border-radius: 50%;
}

.pz {
	width: 130px;
	height: 160px;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.pz img {
	/* height: 82%; */
}

.ant-image {
	width: 100%;
	/* height: 80%; */
}
.main{
	background-color: #161A1D;
}
</style>