<template lang="pug">
section#banner
	#purpose-pos
	.main-link.phone
		button.main(v-if="locale === 'zh-TW'" onclick=`location.href='/zh-TW/application/check'`) {{ t('header.apply_now') }}
		button.main(v-if="locale === 'zh-CN'" onclick=`location.href='/zh-CN/application/check'`) {{ t('header.apply_now') }}
		button.main(v-if="locale === 'en-US'" onclick=`location.href='/en-US/application/check'`) {{ t('header.apply_now') }}
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
	justify-content: flex-end;

	box-sizing: border-box;
	padding-top: 100px;

	background-repeat: no-repeat;

	@include web() {
		height: 100vh;
		max-height: 700px;
		margin-bottom: -80px;

		background-image: url('/banner-cover_w.png');
		background-position: center top;
		background-size: auto 100%;
		&::before,
		&::after {
			width: 922px;
			height: 922px;

			border-radius: 922px;
		}
		&::before {
			top: 100px;
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
		height: 85vh;
		margin-bottom: 100px;

		background-image: url('/banner-cover_m.png');
		background-position: center center;
		background-size: cover;
	}

	@media (min-width: 1400px) {
		max-height: 800px;
	}
	@media (min-width: 1600px) {
		max-height: 900px;
	}
	@media (min-width: 1800px) {
		max-height: 1000px;
	}
	@media (min-width: 2000px) {
		max-height: 1100px;
	}
	@media (min-width: 2200px) {
		max-height: 1200px;
	}
}
.main-link {
	position: relative;
	z-index: 10;

	flex: 0;

	height: 90px;

	transform: translateY(60px);

	button {
		&::before {
			position: absolute;
			z-index: -1;
			top: 0;

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
