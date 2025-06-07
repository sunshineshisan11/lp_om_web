import {
		useRouter
	} from 'vue-router';
const router = useRouter();
import mineApi from "../api/mine"
export default {
	getUser: async(account)=> {
		console.log(account)
		await mineApi.get_user({
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
}