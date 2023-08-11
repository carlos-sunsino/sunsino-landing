<template lang="pug">
section#partnership
	.title
		span {{ t('main.partnership') }}
	.list
		img(src="/partnership-logo-sunsino.png")
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#partnership {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	@include web() {
		padding: 80px 30px;
	}
	@include phone() {
		padding: 50px 30px;
	}
	gap: 50px;
	@include web() {
		&::after {
			position: absolute;
			z-index: -1;
			top: -500px;
			right: 50%;

			width: 922px;
			height: 922px;

			content: '';
			transform: translateX(calc(50% + 0px));

			opacity: 0.3;
			border-radius: 922px;
			background: radial-gradient(50% 50% at 50% 50%, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
		}
	}
	gap: 50px;
	@include phone() {
		&::after {
			position: absolute;
			z-index: -1;
			right: 50%;
			bottom: -250px;

			width: 485px;
			height: 485px;

			content: '';
			transform: translateX(calc(50% + 0px));

			opacity: 0.3;
			border-radius: 485px;
			background: radial-gradient(50% 50% at 50% 50%, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
		}
	}
}
.list {
	display: flex;

	@include web() {
		gap: 30px;
		img {
			height: 80px;

			object-fit: contain;
		}
	}
	@include phone() {
		flex-direction: column;

		gap: 20px;
		img {
			width: 60vw;

			object-fit: contain;
		}
	}
}
</style>
