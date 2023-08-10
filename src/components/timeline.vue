<template lang="pug">
section#timeline
	.title
		span {{ t('main.timeline') }}
	//- .aos(data-aos="fade-up")
		//- .timeline-group
		//- 	.item 
		//- 		.num 01
		//- 		.desc To connect emerging innovation with Taiwanese tech powerhouse
		//- 	.item 
		//- 		.num 02
		//- 		.desc To get a glimpse of the top innovators from SEA
		//- 	.item 
		//- 		.num 03
		//- 		.desc To learn from the state-of-the-art corporate startup engagement
		//- 	.item 
		//- 		.num 04
		//- 		.desc Business valuation: How investors determine the value of your business
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#timeline {
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 50px;
    @include web() {
        margin-top: 130px;
    }
    @include phone() {
        margin-top: 170px;
    }
    &::before {
        position: absolute;

        @include web() {
            top: 0;
            left: 50%;

            width: 1640px;
            height: 1000px;

            content: '';
            transform: translate(-58%, -130px);

            background-image: url('/timeline-bg_w.svg');
            background-repeat: no-repeat;
            background-position: center top;
            background-size: contain;
        }
        @include phone() {
            bottom: -600px;
            left: -80px;

            width: 200vw;
            height: 1000px;

            content: '';

            background-image: url('/timeline-bg_m.svg');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: contain;
        }
    }
}
.timeline-group {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.item {
    display: flex;
    align-items: flex-start;
    align-self: stretch;

    padding: 20px 0;

    border-bottom: 1px solid rgba(111, 255, 229, .3);

    @include phone() {
        padding: 20px;
    }
    gap: 24px;
    .num {
        text-align: center;
        letter-spacing: 1.8px;

        opacity: .5;
        color: var(--main, #6fffe5);

        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
        line-height: normal;
    }
    .desc {
        text-align: left;
        letter-spacing: .72px;

        color: #ffffff;

        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        line-height: 140%; /* 25.2px */
    }
}

</style>
