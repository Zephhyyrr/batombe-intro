<template>
  <section id="video" class="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-red-900 mb-6">Video Pengenalan</h2>
      <p class="text-center text-gray-600 mb-12 text-lg">
        Lihat bagaimana cara menggunakan aplikasi Rima Batombe melalui video singkat berikut ini.
      </p>
      
      <div class="max-w-4xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/jd6lEsExGkU"
            title="Video Rima Batombe"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Ganti YOUR_VIDEO_ID dengan ID video YouTube Anda
// Contoh: jika link YouTube https://www.youtube.com/watch?v=dQw4w9WgXcQ
// maka VIDEO_ID adalah: dQw4w9WgXcQ
</script>
