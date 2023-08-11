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
	padding-top: 100px;

	@include web() {
		height: 100vh;
		max-height: 800px;
		margin-bottom: -80px;
		&::before,
		&::after {
			width: 922px;
			height: 922px;

			border-radius: 922px;
		}
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
		height: 700px;
		margin-bottom: 70px;

		&::before,
		&::after {
			width: 485px;
			height: 485px;

			border-radius: 485px;
		}
		&::before {
			top: -20%;
			left: -50%;
		}
		&::after {
			right: -50%;
			bottom: -20%;
		}
	}

	&::before,
	&::after {
		position: absolute;
		z-index: 10;

		content: '';

		opacity: 0.3;
		background: radial-gradient(50% 50% at 50% 50%, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
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

	flex: 0;

	height: 90px;
	padding-top: 20px;

	button {
		&::before {
			position: absolute;
			z-index: -1;
			top: 20px;

			width: 90vw;
			height: 100px;

			content: '';

			background-image: url('/banner-link.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: contain;
		}
	}
}
</style>
