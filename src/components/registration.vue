<template lang="pug">
section#registration
	#registration-pos
	.title
		span {{ t('main.registration') }}
	//- .registration-group
	//- 	img.logo(src="/registration-logo-sunsino.png")
	//- 	img.logo(src="/registration-logo-tta.svg")
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#registration {
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
.registration-group {
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
