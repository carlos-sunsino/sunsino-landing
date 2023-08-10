<template lang="pug">
section#purpose
	#purpose-pos
	.title
		span {{ t('main.purpose') }}
	//- .aos(data-aos="zoom-in")
	//- 	.purpose-group
	//- 		.card
	//- 			.num 1.
	//- 			.topic Welcome and Introduction
	//- 			.sub
	//- 				.info.time 14:00 AM - 14:30 AM
	//- 				.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
	//- 		.card
	//- 			.num 2.
	//- 			.topic Fireside Chat: How Corporate and Startups Should Collaborate, and Why?
	//- 			.sub
	//- 				.info.time 14:30 AM - 15:30 AM
	//- 				.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
	//- 		.card
	//- 			.num 3.
	//- 			.topic Pitch: AI x B2B Solutions
	//- 			.sub
	//- 				.info.time 15:40 AM - 16:30 PM
	//- 				.info.location ONLINE &#[br] OFFLINE (Taiwan Tech Arena)
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#purpose {
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
            // background-image: url('/purpose-bg_w.svg');

            background-repeat: no-repeat;
            background-position: center top;
            background-size: 100%;
        }
        @include phone() {
            width: 100%;
            height: 110%;

            content: '';
            transform: translate(0px, 70px);
            // background-image: url('/purpose-bg_m.svg');

            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    }
}
.purpose-group {
    display: flex;

    gap: 15px;
    @include phone() {
        flex-direction: column;

        padding: 17px;
    }
}

</style>
