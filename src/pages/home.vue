<template lang="pug">
#home
    //- TODO: wow 入場動畫
    Banner
    Agenda
    Highlight
    Speakers
    Partnership
    ContactUs
    Footer
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import Banner from '@/components/banner.vue'
import Agenda from '@/components/agenda.vue'
import Highlight from '@/components/highlight.vue'
import Speakers from '@/components/speakers.vue'
import Partnership from '@/components/partnership.vue'
import ContactUs from '@/components/contactus.vue'
import Footer from '@/components/footer.vue'
</script>

<style lang="scss" scoped>
#home {
	overflow: hidden scroll;
}
</style>
