<template lang="pug">
section#purpose
	#purpose-pos
	.title
		span {{ t('main.purpose') }}
	.content {{ t('purpose.description') }}
	.media
		video(preload controls)
			source(src="/promotional.mp4" type="video/mp4")
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#purpose {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	@include web() {
		padding: 100px 30px;

		background-image: url('/purpose-bg_w.png');
		background-repeat: repeat-x;
		background-position: center bottom;
		background-size: 2560px 740px;
	}
	@include phone() {
		padding: 50px 30px;

		background-image: url('/purpose-bg_m.png');
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: contain;
	}
	gap: 50px;
}
.content {
	text-align: left;

	color: var(--white, #ffffff);
	/* Context */

	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 200%; /* 32px */

	font-feature-settings: 'calt' off;
	@include web() {
		max-width: $content_w;
	}
	@include phone() {
		max-width: 100vw;
	}
}
.media {
	position: relative;

	width: 100%;
	max-width: 1050px;

	background-color: #000000b0;

	backdrop-filter: blur(50px);
	&::before,
	&::after {
		position: absolute;
		z-index: -1;

		content: '';

		background-repeat: no-repeat;

		@include phone() {
			display: none;
		}
	}
	&::before {
		top: 0;
		left: 0;

		width: 177px;
		height: 390px;

		transform: translate(-70%, -40%);

		background-image: url('/ticket-01.png');
		background-size: contain;
	}
	&::after {
		right: 0;
		bottom: 0;

		width: 89px;
		height: 242px;

		transform: translate(50%, 40%);

		background-image: url('/ticket-02.png');
		background-size: contain;
	}
}
video {
	width: 100%;
	height: 100%;
}
</style>
