<template lang="pug">
section#reward
	#reward-pos
	.title
		span {{ t('main.reward') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss" scoped>
#reward {
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;

    @include web() {
        padding: 100px 30px;
    }
    @include phone() {
        padding: 50px 30px;
    }
    gap: 50px;
}

</style>
