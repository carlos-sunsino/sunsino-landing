<template lang="pug">
#footer
	.contact
		img(src="/logo.svg")
		.itemGroup
			.item {{ t('footer.sponsor') }}
			.item {{ t('footer.organizer') }}
			.item {{ t('footer.contact') }}
	.copyright © 2023 STARTUP101. All rights reserved.
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
#footer {
	z-index: 10;

	display: flex;
	align-items: center;
	flex-direction: column;

	background-color: #000000;

	@include web() {
		padding: 40px 100px;
	}
	@include phone() {
		padding: 50px 30px;
	}
	.contact {
		display: flex;
		align-items: center;
		justify-content: space-between;

		box-sizing: border-box;
		width: 100%;
		max-width: 1280px;

		gap: 80px;
		@include phone() {
			gap: 30px;
		}
	}

	img {
		width: 90px;
		height: 80px;

		@include phone() {
			width: 55px;
			height: 50px;
		}
	}
}
.itemGroup {
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	justify-content: space-between;

	@include web() {
		flex-direction: row;

		gap: 20px;
	}
	@include phone() {
		flex-direction: column;

		gap: 10px;
	}
}
.item {
	display: flex;

	text-align: center;
	white-space: nowrap;

	color: #edf0f7;

	font-family: Montserrat;
	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 150%; /* 24px */

	@include phone() {
		text-align: left;
		white-space: pre-line;

		font-size: 14px;
	}
}
.copyright {
	display: flex;
	justify-content: center;

	width: 100%;
	margin-top: 30px;
	padding-top: 30px;

	white-space: nowrap;

	color: #edf0f7;
	border-top: 1px rgba(#ffffff, 0.8) solid;

	font-family: Montserrat;
	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 150%; /* 24px */

	@include phone() {
		margin-top: 40px;
		padding-top: 40px;

		font-size: 14px;
	}
}
</style>
