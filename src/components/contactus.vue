<template lang="pug">
section#contactus
	#faq-pos
	.title
		span Contact Us
	.contactus-group
		.card
			.topic About STARTUP101
			.desc STARTUP101 is the biggest fundraising matchmaking platform in Taiwan, empowering entrepreneurs and investors for their innovation endeavors. As a part of Sunsino Venture Group, our vision is to connect innovators alike globally. STARTUP101 has been the powerhouse of startup matchmaking and fundraising since 2020. We back startups with entrepreneurial resources, and connect investors. In the STARTUP101 platform, we have over 1,900+ startups, 900+ investors, and 50+ accelerators.
		.card.center
			.topic For Any Furthur Questions,#[br]Feel Free to Contact Us
			.sub
				.info.service-phone +886 2 7718 6088
				.info.service-mail(onclick="location.href='mailto:info@startup101.biz'") info@startup101.biz
				.info.service-time 10:00~18:00 (GMT+8)
			.prompt Join STARTUP101 Right Away!
			button.l(onclick="location.href='https://startup101.biz/ecosystem'") STARTUP101 Ecosystem
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#contactus {
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;

	gap: 40px;
	@include web() {
		margin-top: 130px;
	}
	@include phone() {
		margin-top: 50px;
	}
	&::before {
		position: absolute;

		@include web() {
			top: 0;
			left: 50%;

			width: 1640px;
			height: 800px;

			content: '';
			transform: translate(-58%, -130px);

			background-image: url('/contactus-bg_w.svg');
			background-repeat: no-repeat;
			background-position: center top;
			background-size: contain;
		}
		@include phone() {
			top: 0;
			left: 0;

			width: 200vw;
			height: 500px;

			content: '';
			transform: translate(-25%, -15%);

			background-image: url('/contactus-bg_m.svg');
			background-repeat: no-repeat;
			background-position: center bottom;
			background-size: contain;
		}
	}
	&::after {
		position: absolute;
		z-index: 100;
		bottom: 0;
		left: 0;

		content: '';

		background-image: url('/bg-ball-02.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;

		@include web() {
			width: 135px;
			height: 135px;

			transform: translate(110%, 70%);
		}
		@include phone() {
			width: 65px;
			height: 65px;

			transform: translate(20%, 70%);
		}
	}
}
.contactus-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	width: 90vw;
	max-width: 1050px;

	gap: 32px;
}
.card {
	flex: 1;

	@include web() {
		padding: 50px 40px;
	}
	@include phone() {
		padding: 40px 30px;
	}
	.sub {
		display: flex;
		flex-direction: column;

		margin-bottom: 10px;

		gap: 8px;
	}
	button {
		margin-bottom: 20px;
	}
}
</style>
