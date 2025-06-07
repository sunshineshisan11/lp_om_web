import $http from '../http.js';
export default {
	updateMoney: function(data) {
		return $http.get('api/get/updateMoney',data)
	},
	getGift: function(data) {
		return $http.get('api/get/gift',data)
	},
	giftVoteAdd: function(data) {
		return $http.get('api/update/giftVoteAdd',data)
	},
	setVote: function(data) {
		return $http.get('api/set/vote',data)
	},
	addVote: function(data) {
		return $http.get('api/add/vote',data)
	},
}