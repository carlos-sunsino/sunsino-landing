<template lang="pug">
section#registration
	#registration-pos
	.title
		span {{ t('main.registration') }}
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

	@include web() {
		padding: 100px 30px;
	}
	@include phone() {
		padding: 50px 30px;
	}
	gap: 50px;
}
</style>
