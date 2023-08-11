<template lang="pug">
section#reward
	#reward-pos
	.title
		span {{ t('main.reward') }}
	.block
		.trophy
			img(src="/logo.svg")
			.name {{ t('reward.trophy_name') }}
			.note {{ t('reward.trophy_note') }}
			.amount {{ t('reward.trophy_amount') }}#[span {{ t('reward.trophy_amount_tip') }}]
		.content {{ t('reward.description') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#reward {
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
}
.block {
	display: flex;

	color: #ffffff;

	gap: 50px;
	@include phone() {
		flex-direction: column;
	}
	.trophy {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		text-align: center;

		font-weight: 400;
		font-style: normal;
		line-height: 200%;

		gap: 5px;
		font-feature-settings: 'calt' off;
		img {
			width: 130px;
			height: 130px;
			margin-bottom: 20px;

			border-radius: 100%;
			background-color: #ffffff18;

			object-fit: cover;
		}
		.name {
			font-size: 30px;
			font-weight: 500;
		}
		.note {
			font-size: 16px;
		}
		.amount {
			display: flex;
			flex-direction: column;

			font-size: 20px;
			line-height: normal;
			span {
				font-size: 16px;
			}
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
}
</style>
