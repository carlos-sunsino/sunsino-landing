<template lang="pug">
#home
    Banner
    Agenda
    Highlight
    //- Speakers
    Partnership
    ContactUs
    Footer
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Banner from '@/components/banner.vue'
import Agenda from '@/components/agenda.vue'
import Highlight from '@/components/highlight.vue'
// import Speakers from '@/components/speakers.vue'
import Partnership from '@/components/partnership.vue'
import ContactUs from '@/components/contactus.vue'
import Footer from '@/components/footer.vue'

const route = useRoute()

const { locale } = useI18n()
locale.value = route.meta.locale
</script>

<style lang="scss" scoped>
#home {
	overflow: hidden scroll;
}
</style>
