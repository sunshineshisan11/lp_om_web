import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        user: {},
        sysData:{
            sys:[],
            lang:[]
        },
		PLplay: false,//专区视频播放按钮
		baseURL:'https://findyourflame.vip:168'
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
});

export default useCounterStore