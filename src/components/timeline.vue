<template lang="pug">
section#timeline
	#timeline-pos
	.bg-img.star-01.web
	.bg-img.star-02.web
	.title
		span {{ t('main.timeline') }}
	.item
		img.web(v-if="locale === 'zh-TW'" src="/timeline_zh_w.png")
		img.phone(v-if="locale === 'zh-TW'" src="/timeline_zh_m.png")
		img.web(v-if="locale === 'zh-CN'" src="/timeline_cn_w.png")
		img.phone(v-if="locale === 'zh-CN'" src="/timeline_cn_m.png")
		img.web(v-if="locale === 'en-US'" src="/timeline_en_w.png")
		img.phone(v-if="locale === 'en-US'" src="/timeline_en_m.png")
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#timeline {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	@include web() {
		padding: 100px 30px;
	}
	@include phone() {
		padding: 50px 30px;
	}
	gap: 50px;
	@include web() {
		&::before,
		&::after {
			width: 922px;
			height: 922px;

			border-radius: 922px;
		}
		&::before {
			bottom: -100px;
			left: 50%;

			transform: translateX(calc(-50% - 500px));
		}
		&::after {
			top: -400px;
			left: 50%;

			transform: translateX(calc(-50% + 500px));
		}
	}
	@include phone() {
		&::before,
		&::after {
			width: 485px;
			height: 485px;

			border-radius: 485px;
		}
		&::before {
			top: -180px;
			left: -240px;
		}
		&::after {
			right: -250px;
			bottom: -250px;
		}
	}
	img {
		object-fit: contain;
		@include web() {
			max-width: $content_w;
		}
		@include phone() {
			width: 100%;
		}
	}

	&::before,
	&::after {
		position: absolute;
		z-index: -1;

		content: '';

		opacity: 0.3;
		background: radial-gradient(50% 50% at 50% 50%, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
	}
	.bg-img.star-01 {
		top: 150px;
		left: 50%;

		transform: translateX(calc(-50% - 100px));
	}
	.bg-img.star-02 {
		top: 800px;
		left: 50%;

		transform: translateX(calc(-50% - 500px));
	}
}
</style>
