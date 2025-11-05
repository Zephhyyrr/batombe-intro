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

        <GuideCard :number="2" title="Ciptakan Pantun Pertama Anda">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Beranda: Di halaman utama, Anda akan menemukan fitur "Generate Batombe".</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Personalisasi: Pilih Tema pantun (misal: "Nasihat Pernikahan"), Jumlah Baris, dan Emosi yang Anda rasakan (misal: "Bahagia").</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Buat Pantun: Tekan tombol "Buek Pantun Baru". AI (Gemini) akan langsung membuatkan pantun Batombe baru yang otentik untuk Anda.</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Terjemahan: Di halaman hasil, Anda bisa melihat pantun dalam Bahasa Minang dan tekan "Terjemahan" untuk melihat artinya dalam Bahasa Indonesia</span>
            </li>
          </ul>
        </GuideCard>

        <GuideCard :number="3" title="Rekam, Bagikan, & Berinteraksi (Fitur Komunitas)">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Postingan: Bagikan pantun atau rekaman suara Anda ke halaman Postingan Komunitas.</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Interaksi: Lihat, beri like, dan komentari karya pengguna lain. Anda juga bisa mendapatkan arahan langsung dari Pemangku Adat di fitur ini.</span>
            </li>
          </ul>
        </GuideCard>

        <GuideCard :number="4" title="Pelajari & Tinjau Kembali (Fitur Edukasi)">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Belajar Bahasa Minang: Masuk ke menu Baraja (Belajar). Di sini Anda bisa mempelajari kosakata adat dan struktur pantun Minang secara interaktif.</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-red-700 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Riwayat (History): Semua pantun yang pernah Anda buat akan tersimpan otomatis di halaman History (Riwayat) untuk Anda lihat kembali kapan pun</span>
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
