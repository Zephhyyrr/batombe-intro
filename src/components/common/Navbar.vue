<template>
  <nav class="bg-red-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo + Nama -->
        <div class="flex items-center space-x-3">
          <img 
            src="../../assets/logo.jpg" 
            alt="Logo"
            class="w-10 h-10 rounded-full object-cover"
          />
          <span class="font-bold text-xl">RimaBatombe</span>
        </div>

        <!-- Menu -->
        <div class="hidden md:flex space-x-8">
          <a href="#beranda" class="hover:text-yellow-300 transition">Beranda</a>
          <a href="#tentang" class="hover:text-yellow-300 transition">Tentang</a>
          <a href="#video" class="hover:text-yellow-300 transition">Video</a>
          <a href="#download" class="hover:text-yellow-300 transition">Download</a>
          <a href="#panduan" class="hover:text-yellow-300 transition">Panduan</a>
        </div>

      </div>
    </div>
  </nav>
</template>
