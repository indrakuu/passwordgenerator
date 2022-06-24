<template>
  <div class="container mx-auto card w-96 bg-base-100 shadow-xl" id="beranda">
    <div class="card-body">
      <h2 class="card-title">Password Generator</h2>
      <p>Buat Password Menjadi Kuat dan Sulit Ditebak!</p>
      <div class="form-control mt-2">
        <label class="label">
          <span class="label-text">Panjang karakter</span>
        </label>
        <input type="range" min="5" max="15" class="range range-primary" v-model="charLen" />
        <div class="w-full flex justify-center text-xs px-2">
          <span>{{charLen}}</span>
        </div>
      </div>
      <div class="form-control mt-2">
        <label class="label cursor-pointer" v-for="(option, index) in optiondata" :key="index">
          <span class="label-text"> {{ option.name }}</span>
          <input type="checkbox" class="checkbox" v-model="option.status" />
        </label>
      </div>
      <div class="form-control mt-5">
        <input type="text" :value="passwordResult" v-on:focus="$event.target.select()"
          placeholder="Hasil password generator" class="input input-bordered w-full max-w-xs" ref="clone" readonly />
      </div>
      <div v-if="messageData.boolean">
        <div class="form-control mt-3">
          <div :class="[messageData.color]">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="[messageData.logo]" />
              </svg>
              <span>{{ messageData.message }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions mt-5 justify-end">
        <button class="btn btn-primary" @click="copy">Salin</button>
        <button class="btn btn-primary" @click="generatePassword=!generatePassword">Generate</button>
      </div>
    </div>
  </div>
<About/>
</template>

<script>
import About from '@/views/AboutView.vue'
  export default {
    name: 'HomeView',
    components:{
      About
    },
    data() {
      return {
        charLen: 8,
        generatePassword: true,
        current: 'password akan tersimpan sementara disini',
        char: '',
        messageData: {
          message: '',
          boolean: false,
          logo: '',
          colors: '',
        },
        optiondata: [{
            name: 'Huruf Kecil',
            status: false,
            chars: 'abcdefghjkmnopqrstuvwxyz'
          },
          {
            name: 'Huruf Kapital',
            status: false,
            chars: 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
          },
          {
            name: 'Angka',
            status: false,
            chars: '0123456789'
          },
          {
            name: 'Simbol',
            status: false,
            chars: "!@#$%^&*()'-.:;<>=?{}[]_`|~+,/\"\\"
          }
        ]
      }
    },
    computed: {
      charset() {
        return [...this.optiondata].map(element => {
          if (element.status === true)
            return element.chars;
        }).join('');
      },
      passwordResult() {
        this.generatePassword;
        return ([...window.crypto.getRandomValues(new Uint32Array(this.charLen))]
          .map(value => this.charset[value % this.charset.length])
          .join(''))
      },
    },
    methods: {
      copy() {
        if (this.$refs.clone.value === '') {
          this.messageData.boolean = true
          this.messageData.message = 'Silahkan centang minimal salah satu untuk mendapatkan password'
          this.messageData.color = 'alert shadow-lg alert-warning'
          this.messageData.logo =
            'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          setTimeout(() => {
            this.messageData.boolean = false;
          }, 3000);
        } else {
          this.$refs.clone.focus();
          document.execCommand('copy');
          console.log(this.$refs.clone.value)
          this.current = this.$refs.clone.value
          this.messageData.boolean = true;
          this.messageData.message = 'Password telah tersalin'
          this.messageData.color = 'alert alert-success shadow-lg'
          this.messageData.logo = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          setTimeout(() => {
            this.messageData.boolean = false;
          }, 5000);
        }

      }
    }
  }
</script>