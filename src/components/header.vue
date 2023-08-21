<template lang="pug">
#header
	.logo(v-if="!open")
		a(href="https://innofutureofbank.com/")
			img(src="/logo.svg")
	.links.web
		a(href="#purpose-pos") {{ t('main.purpose') }}
		a(href="#timeline-pos") {{ t('main.timeline')}}
		a(href="#competition-pos") {{ t('main.competition')}}
		a(href="#reward-pos") {{ t('main.reward')}}
		a(href="#faq-pos") {{ t('main.faq')}}
	.functions
		.dropdown(v-if="!open" @click="lang = !lang" :class="lang?'open':''") {{ t("locale.current") }}#[Icon(color="#fff" size="0.8em") #[CaretDownOutline]]
			.dropdown-content
				a(href="/zh-TW") {{ t("locale.zh") }}
				a(href="/zh-CN") {{ t("locale.cn") }}
				a(href="/en-US") {{ t("locale.en") }}
		button.main.web(v-if="locale === 'zh-TW'" onclick=`location.href='https://innofutureofbank.com/zh-TW/application/check'`) {{ t('header.apply_now') }}
		button.main.web(v-if="locale === 'zh-CN'" onclick=`location.href='https://innofutureofbank.com/zh-CN/application/check'`) {{ t('header.apply_now') }}
		button.main.web(v-if="locale === 'en-US'" onclick=`location.href='https://innofutureofbank.com/en-US/application/check'`) {{ t('header.apply_now') }}
		a.list.phone(v-if="!open" @click="open = !open")
			img(src="/Header/Mobile/list.svg")
		a.close.phone(v-if="open" @click="open = !open")
			img(src="/Header/Mobile/close.svg")
.board(:class="open?'open':''")
	template(v-if="locale === 'zh-TW'")
		img(src="/banner-info_zh.png")
		button.main(onclick=`location.href='https://innofutureofbank.com/zh-TW/application/check'`) {{ t('header.apply_now') }}
	template(v-if="locale === 'zh-CN'")
		img(src="/banner-info_cn.png")
		button.main(onclick=`location.href='https://innofutureofbank.com/zh-CN/application/check'`) {{ t('header.apply_now') }}
	template(v-if="locale === 'en-US'")
		img(src="/banner-info_en.png")
		button.main(onclick=`location.href='https://innofutureofbank.com/en-US/application/check'`) {{ t('header.apply_now') }}
	a(href="#purpose-pos" @click="open = !open") {{ t('main.purpose') }}
	a(href="#timeline-pos" @click="open = !open") {{ t('main.timeline')}}
	a(href="#competition-pos" @click="open = !open") {{ t('main.competition')}}
	a(href="#reward-pos" @click="open = !open") {{ t('main.reward')}}
	a(href="#faq-pos" @click="open = !open") {{ t('main.faq')}}
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CaretDownOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'

const open = ref(false)
const lang = ref(false)
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
	padding: 10px 100px;

	background: rgba(0, 0, 0, 0.6);

	backdrop-filter: blur(25px);
	@include phone() {
		padding: 18px 30px;
	}
	.logo {
		flex: 1;
		justify-content: flex-start;

		text-align: left;
		a {
			display: flex;

			padding: 0;
		}
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
		display: flex;

		padding: 13px 0;

		color: #ffffffe7;

		font-size: 16px;
		font-weight: 500;
		&:hover {
			color: rgba(#f6d241, 1);
		}
		img {
			width: 24px;
			height: 24px;
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
#competition,
#reward,
#faq {
	&-pos {
		@include web() {
			position: absolute;
			top: -100px;
		}
		@include phone() {
			position: absolute;
			top: -100px;
		}
	}
}
.board {
	position: fixed;
	z-index: -1;
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
	}
	&.open {
		z-index: 10000;

		opacity: 1;
	}
}
</style>
