<template>
  <div class="min-h-screen flex flex-col justify-between">
    <Header />
    <Navigation />
    <div class="pl-1 pr-1 pt-16">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Navigation from '~/components/navigation/Navigation'

export default {
  components: {
    Header,
    Footer,
    Navigation
  }
}
</script>
