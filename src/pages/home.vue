<template lang="pug">
#home
    Banner
    Purpose
    //- Timeline
    //- Competition
    //- Reward
    //- Registration
    //- Promotion
    //- FAQ
    //- Partnership
    Footer
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Banner from '@/components/banner.vue'
import Purpose from '@/components/purpose.vue'
import Timeline from '@/components/timeline.vue'
import Competition from '@/components/competition.vue'
import Reward from '@/components/reward.vue'
import Registration from '@/components/registration.vue'
import Promotion from '@/components/promotion.vue'
import FAQ from '@/components/faq.vue'
import Partnership from '@/components/partnership.vue'
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
