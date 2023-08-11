<template lang="pug">
section#competition
	#competition-pos
	.title
		span {{ t('main.competition') }}
	.content {{ t('competition.description') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#competition {
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
		&::before,
		&::after {
			position: absolute;
			z-index: 10;

			content: '';
		}
		&::before {
			top: 270px;
			left: 50%;

			width: 540px;
			height: 490px;

			transform: translateX(calc(-50% - 550px));

			background-image: url('/cube_blue.png');
		}
		&::after {
			top: -350px;
			left: 50%;

			width: 630px;
			height: 550px;

			transform: translateX(calc(-50% + 430px));

			background-image: url('/cube_purple.png');
		}
	}
}
.content {
	text-align: left;
	white-space: pre-line;

	color: var(--white, #ffffff);

	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 200%; /* 32px */

	font-feature-settings: 'calt' off;
	@include web() {
		max-width: $content_w - 180px;
	}
	@include phone() {
		max-width: 100vw;
	}
}
</style>
