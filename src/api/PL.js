import $http from '../http.js';
export default {
	set_user: function (data) {
		return $http.get('api/get/set_user', data)
	},
	get_PL: function (data) {
		return $http.get('api/get/convension', data)
	},
	get_pair_list: function (data) {
		return $http.get('api/get/pairList', data)
	},
	get_pair: function (data) {
		return $http.get('api/get/pair', data)
	},
	add_pair:(data)=> {
		return $http.get('api/add/pair', data)
	},
	set_pair:(data)=> {
		return $http.get('api/set/pair', data)
	},
	pair:(data)=> {
		return $http.get('api/pair', data)
	}
}