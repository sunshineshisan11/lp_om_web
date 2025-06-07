import $http from '../http.js';
export default {
	set_user: function(data) {
		return $http.get('api/get/set_user',data)
	},
	get_user: function(data) {
		return $http.get('api/get/get_user',data)
	},
	pairUser: function(data) {
		return $http.get('api/get/user',data)
	},
	get_letter: function(data) {
		return $http.get('api/get/get_letter',data)
	},
	dataError: function(data) {
		return $http.get('api/get/dataError',data)
	},
	set_order: function(data) {
		return $http.get('api/get/set_order',data)
	},
	get_order: function(data) {
		return $http.get('api/get/get_order',data)
	},
	update_pwd: function(data) {
		return $http.get('api/get/updatePWD',data)
	},
	// userInCode: function(data) {
	// 	return $http.get('api/get/userInCode',data)
	// },
	set_pz: function(data) {
		return $http.get('api/get/set_pz',data)
	},
	getVip: function(data) {
		return $http.get('api/get/vip',data)
	}
}