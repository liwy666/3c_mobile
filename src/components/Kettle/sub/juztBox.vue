<template>
	<div class="jxzt-main" v-if="info_list.length>6">
		<ul class="jxzt-box">
			<li @click="toSonControl(info_list[0])" class="two type1">
				<div class="info">
					<div class="l">
						<p class="name">{{info_list[0].name}}</p>
						<p class="tag">{{info_list[0].tag}}</p>
						<i>GO ></i>
					</div>
					<div class="r"><img :src="info_list[0].ad_img" alt=""></div>
				</div>
			</li>
			<li @click="toSonControl(info_list[1])" class="three type2">
				<div class="info">
					<p class="name">{{info_list[1].name}}</p>
					<p class="tag">{{info_list[1].tag}}</p>
					<div class="bottom-img"><img :src="info_list[1].ad_img"></div>
				</div>
			</li>
			<li @click="toSonControl(info_list[2])" class="three type3">
				<div class="info">
					<p class="name">{{info_list[2].name}}</p>
					<p class="tag">{{info_list[2].tag}}</p>
					<div class="bottom-img"><img :src="info_list[2].ad_img"></div>
				</div>
			</li>
			<li @click="toSonControl(info_list[3])" class="three type4">
				<div class="info">
					<p class="name">{{info_list[3].name}}</p>
					<p class="tag">{{info_list[3].tag}}</p>
					<div class="bottom-img"><img :src="info_list[3].ad_img"></div>
				</div>
			</li>
			<li @click="toSonControl(info_list[4])" class="three type5">
				<div class="info">
					<p class="name">{{info_list[4].name}}</p>
					<p class="tag">{{info_list[4].tag}}</p>
					<div class="bottom-img"><img :src="info_list[4].ad_img"></div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props: {
            data: Array,
            toControl: Function,
        },
        computed: {
            info_list: {
                get: function () {
                    let result = [];
                    if (this.data.length > 0) {
                        this.data.forEach(item => {
                            let result_item = item;
                            let name_array = item.goods_name.split('|');
                            result_item.name = name_array[0];
                            result_item.tag = name_array[1];
                            result.push(result_item);
                        });
                    }
                    return result;
                }
            }
        },
        created() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.jxzt-main {
		width: 100%;
		margin-top: 10px;

		.jxzt-box {
			width: 96%;
			border-radius: 5%;
			margin-left: 3%;
			height: 250px;
			display: flex;
			flex-wrap: wrap;

			.two {
				height: 48%;
				width: 64%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				margin-left: 1%;
				margin-top: 1%;

				.info {
					display: flex;

					.l {
						width: 50%;
						text-align: left;
						padding-left: 20px;
						padding-top: 10px;
						box-sizing: border-box;

						p {
							color: white;
						}

						.name {
							font-size: 16px;
							font-weight: bolder;
						}

						.tag {
							font-size: 14px;
						}

						i {
							display: block;
							width: 40px;
							height: 18px;
							background-color: rgb(253, 113, 61);
							border-radius: 5px;
							text-align: center;
							line-height: 18px;
							font-style: normal;
							font-weight: bolder;
							color: white;
							margin-top: 10px;
						}
					}

					.r {
						width: 50%;

						img {
							width: 100%;
						}
					}
				}
			}

			.three {
				background-repeat: no-repeat;
				background-size: 100% 100%;
				height: 48%;
				width: 32%;
				margin-left: 1%;
				margin-top: 1%;

				.info {
					margin-top: 10px;

					.name {
						color: white;
						font-weight: bolder;
						font-size: 14px;
					}

					.tag {
						color: white;
						font-size: 12px;
					}

					.bottom-img {
						width: 60%;
						margin: 0 auto;
						margin-top: 5px;
					}
				}
			}

			.type1 {
				background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_b1.png");
			}

			.type2 {
				background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_b2.png");
			}

			.type3 {
				background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_b3.png");
			}

			.type4 {
				background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_b4.png");
			}

			.type5 {
				background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_b5.png");
			}
		}
	}
</style>