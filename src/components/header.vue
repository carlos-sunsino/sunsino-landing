<template lang="pug">
#header
	.logo
		a(href="https://startup101.biz")
			img(src="/logo.svg")
	.links.web
		a(href="#purpose-pos") {{ t('main.purpose') }}
		a(href="#timeline-pos") {{ t('main.timeline')}}
		a(href="#registration-pos") {{ t('main.registration')}}
		a(href="#reward-pos") {{ t('main.reward')}}
		a(href="#faq-pos") {{ t('main.faq')}}
	.functions
		.dropdown.web {{ t("locale.current") }}#[Icon(color="#fff" size="0.8em") #[CaretDownOutline]]
			.dropdown-content
				a(href="/zh-TW") {{ t("locale.zh") }}
				a(href="/zh-CN") {{ t("locale.cn") }}
				a(href="/en-US") {{ t("locale.en") }}
		button.main.web(onclick="location.href='https://www.surveycake.com/s/nlVGO'") {{ t('header.apply_now') }}
		a.list.phone(v-if="!open" @click="open = !open")
			img(src="/Header/Mobile/list.svg")
		a.close.phone(v-if="open" @click="open = !open")
			img(src="/Header/Mobile/close.svg")
.board(:class="open?'open':''")
	img(v-if="locale === 'zh-TW'" src="/banner-info_zh.png")
	img(v-if="locale === 'zh-CN'" src="/banner-info_cn.png")
	img(v-if="locale === 'en-US'" src="/banner-info_en.png")
	button.main(onclick="location.href='https://www.surveycake.com/s/nlVGO'") {{ t('header.apply_now') }}
	a(href="#purpose-pos" @click="open = !open") {{ t('main.purpose') }}
	a(href="#timeline-pos" @click="open = !open") {{ t('main.timeline')}}
	a(href="#registration-pos" @click="open = !open") {{ t('main.registration')}}
	a(href="#reward-pos" @click="open = !open") {{ t('main.reward')}}
	a(href="#faq-pos" @click="open = !open") {{ t('main.faq')}}
	.dropdown {{ t("locale.current") }}#[Icon(color="#fff" size="0.8em") #[CaretDownOutline]]
		.dropdown-content
			a(href="/zh-TW") {{ t("locale.zh") }}
			a(href="/zh-CN") {{ t("locale.cn") }}
			a(href="/en-US") {{ t("locale.en") }}
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CaretDownOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'

const open = ref(false)
const { t, locale } = useI18n()
</script>

<style lang="scss">
#header {
	position: fixed;
	z-index: 100000;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-sizing: border-box;
	width: 100vw;
	padding: 18px 100px;

	background: rgba(0, 0, 0, 0.4);

	backdrop-filter: blur(25px);
	@include phone() {
		padding: 18px 30px;
	}
	.logo {
		flex: 1;
		justify-content: flex-start;

		text-align: left;

		img {
			width: 55px;
			height: 50px;
		}
	}
	.links {
		display: flex;
		align-items: center;
		flex: 5;
		justify-content: center;

		gap: 40px;
	}
	a {
		color: #ffffffe7;

		font-weight: 500;
		&:hover {
			color: rgba(#f6d241, 1);
		}
		img {
			width: 24px;
			height: 24px;
			margin: 5px;
		}
	}
	.functions {
		display: flex;
		flex: 1;
		justify-content: flex-end;

		gap: 20px;
	}
}

#purpose,
#timeline,
#registration,
#reward,
#faq {
	&-pos {
		@include web() {
			position: absolute;
			top: -200px;
		}
		@include phone() {
			position: absolute;
			top: -150px;
		}
	}
}
.board {
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	box-sizing: border-box;
	width: 100vw;
	height: 100vh;

	transition: opacity 0.2s ease-in-out;

	opacity: 0;
	background-color: #000000;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 140% 120%;

	gap: 40px;
	@include web() {
		z-index: -100;

		display: none;
	}

	img {
		width: 80vw;
		margin-top: 40px;
		margin-bottom: -20px;
	}
	&.open {
		z-index: 10000;

		opacity: 1;
	}
}
</style>
