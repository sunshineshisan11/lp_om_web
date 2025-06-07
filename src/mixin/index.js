import {
	ref
} from 'vue';
import {
	useRouter
} from 'vue-router';
const router = useRouter();
import mineApi from "../api/mine"
export default {
	
}
export function mixin() {
	let account = ''
	if (localStorage.getItem('user')) {
		account = JSON.parse(localStorage.getItem('user')).account
	}
	const getUser = ()=> {
		mineApi.get_user({
			account: account
		}).then(res => {
			if (res.code == 0) {
				try {
					const user = res.rows[0]
					console.log(user)
					delete user.password
					// userInfo.value = user
					// store.user = user
					console.log(store.user)
					const localUser = user
					localStorage.setItem('user', JSON.stringify(localUser))
					return user
				} catch (error) {
					//TODO handle the exception
				}
			} else {
				message.error('fail');
			}
		})
	}
	getUser()
	return {
		getUser
	}
}