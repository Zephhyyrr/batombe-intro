<template>
  <section id="panduan" class="py-20 bg-amber-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-red-900 mb-6">Panduan Lengkap</h2>
      <p class="text-center text-gray-600 mb-16 text-lg">Ikuti langkah-langkah berikut untuk mulai menggunakan Batombe</p>

      <div class="space-y-8">
        <GuideCard :number="1" title="Download & Instalasi">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Klik tombol "Download APK" di atas untuk mengunduh file instalasi</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Aktifkan "Sumber Tidak Dikenal" di pengaturan keamanan Android Anda</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Buka file APK yang sudah didownload dan tekan "Install"</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tunggu proses instalasi selesai, lalu buka aplikasi</span>
            </li>
          </ul>
        </GuideCard>

        <GuideCard :number="2" title="Mulai Menggunakan">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Beranda: Lihat ringkasan konten dan rekomendasi pembelajaran hari ini</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Menu Utama: Akses berbagai kategori seperti Pantun, Pepatah, Cerita Rakyat, dan Kosakata</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pencarian: Gunakan fitur pencarian untuk menemukan konten spesifik dengan cepat</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Favorit: Tandai konten favorit Anda untuk akses cepat di kemudian hari</span>
            </li>
          </ul>
        </GuideCard>

        <GuideCard :number="3" title="Fitur Pembelajaran">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mode Belajar: Pelajari materi secara sistematis dengan penjelasan lengkap dan contoh</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Kuis & Latihan: Uji pemahaman Anda dengan berbagai soal interaktif</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Audio & Pengucapan: Dengarkan cara pengucapan yang benar untuk kosakata dan pantun</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Progres Belajar: Pantau kemajuan pembelajaran Anda melalui dashboard statistik</span>
            </li>
          </ul>
        </GuideCard>

        <GuideCard :number="4" title="Tips & Trik">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Pelajari materi secara bertahap, mulai dari level dasar hingga mahir</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Luangkan waktu 15-30 menit setiap hari untuk hasil optimal</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Praktikkan apa yang dipelajari dalam kehidupan sehari-hari</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Bagikan pengetahuan dengan teman dan keluarga untuk memperdalam pemahaman</span>
            </li>
          </ul>
        </GuideCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import GuideCard from '../common/GuideCard.vue'
</script>
