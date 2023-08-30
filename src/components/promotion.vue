<template lang="pug">
section#promotion
	#promotion-pos
	.title
		span {{ t('main.promotion') }}
	.tabs
		.tab(:class="switchTab === 'stage1'?'active':''" @click="switchTab = 'stage1'") {{ t('promotion.stage1') }}
		.tab(:class="switchTab === 'stage2'?'active':''" @click="switchTab = 'stage2'") {{ t('promotion.stage2') }}
		.tab(:class="switchTab === 'stage3'?'active':''" @click="switchTab = 'stage3'") {{ t('promotion.stage3') }}
	.list
		.team(v-for="team in teams[switchTab]") {{ team }}
		.empty(v-if="teams[switchTab].length === 0 && switchTab === 'stage1'") {{ t('promotion.stage1_empty') }}
		.empty(v-if="teams[switchTab].length === 0 && switchTab === 'stage2'") {{ t('promotion.stage2_empty') }}
		.empty(v-if="teams[switchTab].length === 0 && switchTab === 'stage3'") {{ t('promotion.stage3_empty') }}
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchTab = ref('stage1')

const teams = {
	stage1: [],
	stage2: [],
	stage3: []
}
</script>

<style lang="scss" scoped>
#promotion {
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

	&::before,
	&::after {
		position: absolute;
		z-index: 11;

		content: '';

		background-repeat: no-repeat;

		@include phone() {
			display: none;
		}
	}
	&::before {
		top: 300px;
		left: 50%;

		width: 105px;
		height: 250px;

		transform: translate(calc(-50% - 500px), 0%);

		background-image: url('/ticket-03.png');
		background-size: contain;
	}
	&::after {
		top: -100px;
		right: 50%;

		width: 74px;
		height: 200px;

		transform: translate(calc(50% + 500px), 0%);

		background-image: url('/ticket-04.png');
		background-size: contain;
	}
}
.tabs {
	display: flex;
	justify-content: center;

	width: 100%;

	cursor: pointer;

	color: #ffffff;
	border-bottom: 1px rgba(#ffffff, 0.5) solid;

	gap: 50px;
	@include web() {
		max-width: $content_w;
	}
	@include phone() {
		max-width: 100vw;
	}
	.tab {
		display: flex;
		align-items: center;
		flex-direction: column;

		transition: all 0.2s;
		letter-spacing: 0.96px;

		outline: none;

		font-size: 24px;
		font-weight: 400;
		font-style: normal;
		line-height: 24px; /* 100% */
		&.active {
			color: #fcc200;
			&::after {
				width: 100%;
				height: 4px;
				margin-top: 20px;
				padding: 0 15px;

				content: '';

				background-image: linear-gradient(131deg, #1663f1 0%, #9747ff 50%, #fcc200 100%);
			}
		}
	}
}
.list {
	display: flex;
	flex-direction: column;

	color: #ffffff;

	gap: 50px;
	@include phone() {
		&::after {
			position: absolute;
			z-index: -1;
			top: 50%;
			right: 50%;

			width: 485px;
			height: 485px;

			content: '';
			transform: translate(calc(50% + 0px), -25%);

			opacity: 0.3;
			border-radius: 485px;
			background: radial-gradient(50% 50% at 50% 50%, #0c54c0 0%, rgba(0, 255, 255, 0) 100%);
		}
	}
	.team {
		font-size: 20px;
		font-weight: 400;
		font-style: normal;
		line-height: 24px; /* 120% */
	}
	.empty {
		opacity: 0.8;
	}
}
</style>
