<template lang="pug">
section#application
	.bg-img.star-01.web
	.bg-img.star-02.web
	.title
		span {{ t('main.application') }}
	.content {{ t('application.description') }}
	.docs
		a(v-if="locale === 'zh-TW'" href="/「創新未來」團隊提案簡報模版-light_CN.pptx" download="「創新未來」團隊提案簡報模版.pptx")
			button.secindary {{ t('application.download') }}
		a(v-if="locale === 'zh-CN'" href="/「創新未來」團隊提案簡報模版-light_SC.pptx" download="「创新未来」团队提案简报模版.pptx")
			button.secindary {{ t('application.download') }}
		a(v-if="locale === 'en-US'" href="/「創新未來」團隊提案簡報模版-light_EN.pptx" download="[Innofuture of Fintech] Proposal Template.pptx")
			button.secindary {{ t('application.download') }}
		.notice #[span  {{ t('application.notice') }}]
			.list {{ t('application.list') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#application {
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
			z-index: 10;
			top: 300px;
			right: 50%;

			width: 922px;
			height: 922px;

			content: '';
			transform: translateX(calc(50% + 500px));

			opacity: 0.3;
			border-radius: 922px;
			background: radial-gradient(50% 50% at 50% 50%, #0c54c0 0%, rgba(0, 255, 255, 0) 100%);
		}
	}
	.bg-img.star-01 {
		top: 100px;
		left: 50%;

		transform: translateX(calc(-50% - 550px));
	}
	.bg-img.star-02 {
		top: 650px;
		left: 50%;

		transform: translateX(calc(-50% + 600px));
	}
}
.content {
	text-align: left;
	white-space: pre-line;

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
.docs {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	box-sizing: border-box;
	width: 100%;
	padding: 30px;

	color: #ffffff;
	border-radius: 10px;
	background: #16282c;

	@include web() {
		max-width: $content_w;
	}
	@include phone() {
		max-width: 100vw;
	}
	gap: 30px;
}
.notice {
	display: flex;
	flex-direction: column;

	width: 100%;

	text-align: center;

	font-size: 20px;
	font-weight: 400;
	font-style: normal;
	line-height: 200%; /* 40px */

	gap: 10px;
	font-feature-settings: 'calt' off;
	span {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include web() {
			gap: 20px;
			&::before {
				background-image: url('/application-line-l_w.svg');
			}
			&::after {
				background-image: url('/application-line-r_w.svg');
			}
		}
		@include phone() {
			gap: 10px;
			&::before {
				background-image: url('/application-line-l_m.svg');
			}
			&::after {
				background-image: url('/application-line-r_m.svg');
			}
		}
		&::before,
		&::after {
			flex: 1;

			height: 2px;

			content: '';

			background-repeat: no-repeat;
			background-size: cover;
		}
	}
	.list {
		text-align: center;
		white-space: pre-line;

		font-size: 16px;
		font-weight: 400;
		font-style: normal;
		line-height: 200%; /* 32px */

		font-feature-settings: 'calt' off;
	}
}
</style>
