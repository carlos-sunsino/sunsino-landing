<template lang="pug">
section#banner
	#purpose-pos
	.main-info
		img(v-if="locale === 'zh-TW'" src="/banner-info_zh.png")
		img(v-if="locale === 'zh-CN'" src="/banner-info_cn.png")
		img(v-if="locale === 'en-US'" src="/banner-info_en.png")
	.main-cover
		img.web(src="/banner-cover_w.png")
		img.phone(src="/banner-cover_m.png")
	.main-link.phone
		button.main(onclick="location.href='https://www.surveycake.com/s/nlVGO'") {{ t('header.apply_now') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#banner {
	position: relative;

	display: flex;
	flex-direction: column;

	box-sizing: border-box;
	height: 100vh;
	max-height: 800px;
	padding-top: 100px;

	&::before,
	&::after {
		position: absolute;
		z-index: 10;
		width: 922px;
		height: 922px;

		content: '';

		opacity: 0.2;
		border-radius: 922px;
		background: radial-gradient(50% 50% at 50% 50%, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
	}
	@include web() {
		&::before {
			top: 0;
			left: 50%;
			transform: translateX(calc(-50% - 600px));
		}
		&::after {
			top: -300px;
			left: 50%;
			transform: translateX(calc(-50% + 600px));
		}
	}

	@include phone() {
		&::before {
			top: -40%;
			left: -100%;
		}
		&::after {
			right: -150%;
			bottom: -40%;
		}
	}
}
.main-info,
.main-cover {
	img {
		@include web() {
			height: 100%;
		}
		@include phone() {
			width: 100%;
		}
	}
}
.main-info {
	z-index: 1000;

	@include web() {
		height: 45%;

		transform: translateY(30px);
	}
	@include phone() {
		width: 100vw;

		transform: translateY(60px);
	}
}
.main-cover {
	@include web() {
		height: 70%;

		transform: translateY(-180px);
	}
	@include phone() {
		width: 100vw;
	}
}
.main-link {
	position: relative;
	z-index: 10;

	flex: 1;

	padding-top: 20px;

	button {
		&::before {
			position: absolute;
			top: 20px;

			width: 90%;
			height: 90%;

			content: '';

			background-image: url('/public/banner-link.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: contain;
		}
	}
}
</style>
