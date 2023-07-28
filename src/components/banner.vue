<template lang="pug">
section#banner
	#eventinfo-pos
	.aos(data-aos="fade-up")
		.main-info
			img.web(src="/banner-info_w.svg")
			img.phone(src="/banner-info_m.svg")
			button(onclick="location.href='https://www.surveycake.com/s/nlVGO'") Join Now!
</template>

<script setup></script>

<style lang="scss" scoped>
#banner {
	position: relative;

	height: 100vh;

	@include web() {
		max-height: 800px;
		margin-bottom: 120px;

		background-image: url('/banner-cover.svg');
		background-repeat: repeat-x;
		background-position: center bottom;
		background-size: 100% cover;
		&::before {
			position: absolute;
			top: 120px;
			left: 50%;

			width: 4200px;
			height: 200%;

			content: '';
			transform: translate(-49%, 0px);

			background-image: url('/banner-image_w.svg');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: contain;
		}
	}
	@include phone() {
		margin-bottom: -50px;
		&::before {
			position: absolute;
			top: 0;
			left: 50%;

			width: 100vw;
			height: 100vh;
			min-height: 750px;

			content: '';
			transform: translate(-50%, 0px);

			background-image: url('/banner-image_m.svg');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: cover;
		}
	}
}
.main-info {
	position: absolute;

	@include web() {
		top: 210px;
		right: 50%;

		transform: translateX(320px);
	}
	@include phone() {
		top: 140px;
		left: 0;

		padding: 25px;
	}
	button {
		margin-top: 30px;
	}
}
</style>
