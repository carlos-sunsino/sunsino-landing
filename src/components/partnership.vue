<template lang="pug">
section#partnership
	#partnership-pos
	.title
		span Partnership
	.partnership-group
		//- TODO: 合作夥伴資訊
		img.logo(src="/partnership-logo-sunsino.png")
		img.logo(src="/partnership-logo-tta.svg")
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#partnership {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	gap: 50px;
	@include web() {
		margin-top: 130px;
	}
	@include phone() {
		margin-top: 100px;
	}
}
.partnership-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	width: 90vw;
	max-width: 1000px;

	@include web() {
		gap: 50px;
	}
	@include phone() {
		gap: 30px;
	}
}
.logo {
	width: auto;

	filter: contrast(0) brightness(2);
	@include web() {
		height: 50px;
	}
	@include phone() {
		height: 30px;
	}
}
</style>
