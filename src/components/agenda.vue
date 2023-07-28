<template lang="pug">
section#agenda
	#agenda-pos
	.title
		span AGENDA
	.aos(data-aos="zoom-in")
		.agenda-group
			.card
				.num 1.
				.topic Welcome and Introduction
				.sub
					.info.time 10:00 AM - 10:30 AM
					.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
			.card
				.num 2.
				.topic Fireside Chat: How Corporate and Startups Should Collaborate, and Why?
				.sub
					.info.time 10:30 AM - 11:30 AM
					.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
			.card
				.num 3.
				.topic Pitch: AI x B2B Solutions
				.sub
					.info.time 11:40 AM - 12:30 PM
					.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
</template>

<script setup></script>

<style lang="scss" scoped>
#agenda {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	gap: 50px;
	&::before {
		position: absolute;
		top: 0;

		@include web() {
			width: 1250px;
			height: 200%;

			content: '';
			transform: translate(-70px, -50px);

			background-image: url('/agenda-bg_w.svg');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: 100%;
		}
		@include phone() {
			width: 100%;
			height: 110%;

			content: '';
			transform: translate(0px, 70px);

			background-image: url('/agenda-bg_m.svg');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: cover;
		}
	}
}
.agenda-group {
	display: flex;

	gap: 15px;
	@include phone() {
		flex-direction: column;

		padding: 17px;
	}
}
</style>
