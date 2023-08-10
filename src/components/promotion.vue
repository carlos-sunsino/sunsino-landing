<template lang="pug">
section#promotion
	#promotion-pos
	.title
		span {{ t('main.promotion') }}
	//- .promotion-group
	//- 	img.logo(src="/promotion-logo-sunsino.png")
	//- 	img.logo(src="/promotion-logo-tta.svg")
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#promotion {
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
.promotion-group {
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
