<template>
  <footer class="bg-red-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <!-- Logo + Nama -->
        <div class="flex items-center space-x-3">
          <img 
            src="../../assets/logo.jpg" 
            alt="Logo"
            class="w-10 h-10 rounded-full object-cover"
          />
          <span class="font-bold text-xl">RimaBatombe</span>
        </div>
          <p class="text-red-200">
            Melestarikan dan mempromosikan kekayaan budaya dan sastra Minangkabau untuk generasi mendatang.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Menu Cepat</h4>
          <ul class="space-y-2 text-red-200">
            <li><a href="#beranda" class="hover:text-yellow-300 transition">Beranda</a></li>
            <li><a href="#tentang" class="hover:text-yellow-300 transition">Tentang</a></li>
            <li><a href="#download" class="hover:text-yellow-300 transition">Download</a></li>
            <li><a href="#panduan" class="hover:text-yellow-300 transition">Panduan</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Kontak</h4>
          <ul class="space-y-2 text-red-200">
            <li>Email: info@batombe.id</li>
            <li>Website: www.batombe.id</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-red-800 pt-8 text-center text-red-200">
        <p>&copy; 2024 Batombe - Budaya Sastra Minangkabau. Semua hak dilindungi.</p>
      </div>
    </div>
  </footer>
</template>
