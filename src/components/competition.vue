<template lang="pug">
section#competition
	#competition-pos
	.title
		span {{ t('main.competition') }}
	//- .aos(data-aos="zoom-in")
		//- .competition-group
		//- 	//- TODO: 講者資訊
		//- 	img.item(src="/competition-card-cami.svg")
		//- 	img.item(src="/competition-card.svg")
		//- 	img.item(src="/competition-card.svg")
		//- 	img.item(src="/competition-card.svg")
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#competition {
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
.competition-group {
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
