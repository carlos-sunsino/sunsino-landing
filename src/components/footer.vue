<template lang="pug">
#footer
    .item © 2023 STARTUP101. All rights reserved.
    .item
        .link.fb(onclick="location.href='https://www.facebook.com/startup101.tw/'")
        .link.ig(onclick="location.href='https://www.instagram.com/startup101___/'")
        .link.linkedin(onclick="location.href='https://www.linkedin.com/company/startup101biz'")
        .link.website(onclick="location.href='https://startup101.biz'")
</template>

<script setup></script>

<style lang="scss" scoped>
#footer {
	display: flex;
	justify-content: space-between;

	box-sizing: border-box;
	width: 100%;
	margin-top: 130px;

	@include web() {
		padding: 40px 100px;
	}
	@include phone() {
		align-items: center;
		flex-direction: column-reverse;

		margin-bottom: 40px;

		gap: 30px;
	}
}
.item {
	display: flex;

	padding: 0 60px;

	text-align: center;
	white-space: nowrap;

	color: #ffffff;

	font-family: Montserrat;
	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 150%; /* 24px */

	gap: 10px;
}
</style>
