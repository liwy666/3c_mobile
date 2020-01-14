<template>
	<div class="new-iphone-main" v-if="get_info">
		<div class="head" @click="toControl(index_ad_list.head)">
			<img :src="index_ad_list.head.ad_img" alt="">
		</div>
		<div class="new-iphone" v-for="item in index_ad_list.new_iphone" :key="item.id">
			<img :src="item.ad_img" @click="toControl(item)">
		</div>
		<div class="title">
			<p class="title-large">其他iPhone机型</p>
			<p class="title-small">爆品直降 支持分期免息</p>
		</div>
		<div class="old-iphone">
			<img v-for="item in index_ad_list.old_iphone" :key="item.id" :src="item.ad_img" @click="toControl(item)">
		</div>
		<div class="title">
			<p class="title-large">iPad &amp; Apple Watch</p>
			<p class="title-small">爆品直降 支持分期免息</p>
		</div>
		<div class="old-iphone">
			<img v-for="item in index_ad_list.ipad" :key="item.id" :src="item.ad_img" @click="toControl(item)">
		</div>
		<div class="title">
			<p class="title-large">Mac</p>
			<p class="title-small">更强劲，更专业的强劲。</p>
		</div>
		<img  class="item" v-for="item in index_ad_list.mac"  :key="item.id" :src="item.ad_img" @click="toControl(item)">
		<div class="head" @click="toControl(index_ad_list.floor)">
			<img :src="index_ad_list.floor.ad_img" alt="">
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                get_info: null,
                window_top: 0,
            };
        },
        computed: {
            index_ad_list: {
                get: function () {
                    let result = {
                        head: null,
                        new_iphone: [],
                        old_iphone: [],
                        ipad: [],
                        mac: [],
						floor:[],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '头图':
                                    result.head = item;
                                    break;
                                case '新Iphone':
                                    result.new_iphone.push(item);
                                    break;
                                case '旧Iphone':
                                    result.old_iphone.push(item);
                                    break;
                                case 'Ipad&AppleWatch':
                                    result.ipad.push(item);
                                    break;
                                case 'Mac':
                                    result.mac.push(item);
                                    break;
                                case '尾图':
                                    result.floor = item;
                                    break;
                            }
                        });
                    }
                    return result;
                },
            },
        },
        created() {
            this.getIndexAd();
        },
        mounted() {
            window.addEventListener('scroll', () => {
                this.window_top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            });

        },
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: 'new_iphone'}).then((msg) => {
                    if (msg) {
                        this.get_info = msg;
                    }

                })
            },
            toControl(ad_info) {
                if (ad_info.ad_type === '外链接') {
                    this.$post('ad_item_count', {id: ad_info.id});
                    window.location.href = ad_info.url;
                }
            },
            goBackTop() {
                window.scrollTo(0, 0);
            },
            getRandomArray(_array) {
                if (_array.length > 0) {
                    /*打乱数组*/
                    _array.sort(
                        function () {
                            return Math.random() > 0.5 ? -1 : 1;
                        }
                    );
                }
                return _array;
            }
        },
    };
</script>
<style lang="scss" scoped>
	.new-iphone-main {
		background-color: black;

		.title {
			margin-top: 0.96618357rem;
			margin-bottom: 0.6rem;

			.title-large {
				text-align: center;
				font-size: 0.6rem;
				color: white;
				font-weight: bolder;
				margin-bottom: 0.20531401rem;
			}

			.title-small {
				color: #5ba1e7;
				text-align: center;
				font-size: 0.4rem;
				font-weight: 100;
			}
		}

		img {
			display: block;
		}

		.old-iphone {
			width: 96%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			img {
				width: 4.642rem;
				height: 6.226rem;
				margin-bottom: 0.38647343rem;
				border-radius: 0.24154589rem;
				overflow: hidden;
			}
		}
		.item {
			width: 96%;
			margin: 10px auto;
			display: block;
		}
	}
</style>