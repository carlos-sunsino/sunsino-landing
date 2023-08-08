<template lang="pug">
#header
	a(href="https://startup101.biz")
		img.logo(src="/logo.svg")
	.links.web
		a(href="#eventinfo-pos") Event Info
		a(href="#agenda-pos") Agenda
		//- a(href="#speakers-pos") Speakers
		a(href="#partnership-pos") Partnership
		a(href="#contactus-pos") Contact Us
	.functions
		.dropdown.web {{ t("locale") }}#[Icon(color="#fff" size="0.8em") #[CaretDownOutline]]
			.dropdown-content
				a(href="/zh-TW") 繁中
				a(href="/zh-CN") 簡中
				a(href="/en-US") 英文
		button.web(onclick="location.href='https://www.surveycake.com/s/nlVGO'") Join Now!
		a.list.phone(v-if="!open" @click="open = !open")
			img(src="/Header/Mobile/list.svg")
		a.close.phone(v-if="open" @click="open = !open")
			img(src="/Header/Mobile/close.svg")
.board(:class="open?'open':''")
	a(href="#eventinfo-pos" @click="open = !open") Event Info
	a(href="#agenda-pos" @click="open = !open") Agenda
	//- a(href="#speakers-pos" @click="open = !open") Speakers
	a(href="#partnership-pos" @click="open = !open") Partnership
	a(href="#contactus-pos" @click="open = !open") Contact Us
	.dropdown {{ t("locale") }}#[Icon(color="#fff" size="0.8em") #[CaretDownOutline]]
		.dropdown-content
			a(href="/zh-TW") 繁中
			a(href="/zh-CN") 簡中
			a(href="/en-US") 英文
	button(onclick="location.href='https://www.surveycake.com/s/nlVGO'") Join Now!
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
		width: 126px;
		height: 50px;
	}
	.links {
		display: flex;
		align-items: center;

		gap: 40px;
	}
	a {
		color: #ffffffe7;

		font-weight: 500;
		&:hover {
			color: rgba(255, 255, 255, 0.7);
		}
		img {
			width: 24px;
			height: 24px;
			margin: 5px;
		}
	}
	.functions {
		display: flex;

		gap: 20px;
	}
}

#eventinfo,
#agenda,
#speakers,
#partnership,
#contactus {
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

	width: 100vw;
	height: 100vh;

	transition: opacity 0.2s ease-in-out;

	opacity: 0;
	background-color: transparent;
	background-image: url('/header-board.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 140% 120%;

	gap: 40px;
	@include web() {
		z-index: -100;

		display: none;
	}
	&.open {
		z-index: 10000;

		opacity: 1;
	}
}
</style>
