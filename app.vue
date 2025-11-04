<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DownloadSection />
    <GuideSection />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import DownloadSection from './components/sections/DownloadSection.vue'
import GuideSection from './components/sections/GuideSection.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
