<template>
  <div class="py-12" >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center" id="tentang">Tentang</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">Password
          Generator</p>
        <p class="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">Password (Kata Sandi) merupakan serangkaian karakter
          yang biasanya digunakan untuk melakukan verifikasi identitas dari pengguna selama melakukan proses otentikasi.
          Penggunaan password yang bersifat pribadi dan rahasia pada umumnya diikuti dengan nama pengguna sehingga hanya
          diketahui oleh penggunanya pada saat mengakses suatu perangkat, aplikasi, atau website.</p>
        <p class="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">Serangkaian karakter password bisa berupa huruf,
          angka, atau simbol tergantung kombinasi serta variasi yang dibuat. Dalam membuat password sangat disarankan
          tidak menggunakan kata sehari-hari seperti tanggal, tahun kelahiran, nama pribadi dan dan lain-lain yang
          membuat mudah untuk ditebak dan bisa diakses oleh peretas.</p>
        <p class="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">Layanan keamanan cyber NordPass pernah merilis hasil
          riset terbarunya mengenai daftar password apa saja yang sering digunakan orang Indonesia.
          Terdapat 200 password populer yang ada didalam daftar tersebut, beberapa daftar tersebut adalah "12345",
          "123456","1234567", "12345678", "123456789", "1234567890", "password", "bismillah", "naruto", "qwerty",
          "rahasia".
        </p>
        <p class="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">Oleh karena itu, agar mencegah hal yang tidak
          diinginkan sebaiknya buat password menjadi unik supaya kuat dan aman. Semakin unik password dibuat maka akan
          semakin sulit peretas untuk melakukan serangan brute force.
        </p>
        <p class="mt-4 max-w-6xl text-xl font-bold text-gray-500 sm:text-2xl lg:mx-auto">Berikut Tips dan Cara Membuat Password yang Kuat dan Aman:
        </p>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              </div>
              <p class="ml-16 text-lg leading-6 text-gray-500">{{ feature.name }}</p>
            </dt>       
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script setup>
const features = [
  {
    name: 'Gunakan gabungan angka, huruf kecil, dan huruf besar. Jika memungkinkan tambahkan beberapa karakter spesial seperti *,&,%,@,-, dll.',
  },
  {
    name: 'Panjang password harus lebih dari 8 karakter. Semakin besar jumlah karakter semakin besar pula banyaknya kemungkinan password.',
  },
  {
    name: 'Jangan gunakan nama panggilan, nama orang tua, nama pacar atau kekasih, tanggal lahir, maupun artis kesayangan sebagai password.',
  },
  {
    name: 'Hindari untuk menggunakan kata yang ada dalam kamus sebagai password',
  },
  {
    name: 'Usahakan untuk menggunakan password yang berbeda di setiap akunnya',
  },
  {
    name: 'Jangan menulis atau mengetik password di ponsel, kertas, ataupun dokumen file.',
  },
]
</script>