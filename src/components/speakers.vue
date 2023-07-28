<template lang="pug">
section#speakers
	#speakers-pos
	.title.long
		span Speakers, Panelists & Moderators
	.aos(data-aos="zoom-in")
		.speakers-group
			//- TODO: 講者資訊
			img.item(src="/speakers-card-cami.svg")
			img.item(src="/speakers-card.svg")
			img.item(src="/speakers-card.svg")
			img.item(src="/speakers-card.svg")
</template>

<script setup></script>

<style lang="scss" scoped>
#speakers {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	gap: 50px;
	@include web() {
		margin-top: 130px;
	}
	@include phone() {
		margin-top: 190px;
	}
	&::before {
		position: absolute;
		right: 0;
		bottom: 0;

		content: '';

		background-image: url('/bg-ball-01.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;

		@include web() {
			width: 200px;
			height: 200px;

			transform: translate(-50%, 50%);
		}
		@include phone() {
			width: 140px;
			height: 140px;

			transform: translate(0%, 50%);
		}
	}
}
.speakers-group {
	display: flex;

	gap: 20px;
	@include phone() {
		flex-direction: column;

		padding: 15px;
	}
	.item {
		width: 100%;
	}
}
</style>
