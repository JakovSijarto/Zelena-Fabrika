<template>
    <section class="w-full flex justify-center flex-col items-center pt-20 px-4 md:pt-[10em]">
      <div class="relative flex justify-center">
          <p class="text-[75px] relative tracking-[-1px] max-[440px]:text-[40px]" style="font-family: Kaushan Script, cursive;font-weight: 400;font-style: normal; color: rgba(218, 223, 227, 0.6);">Our Gallery</p>
          <p class="text-[40px] absolute mt-[1.3em] uppercase text-[#25292d] max-[760px]:w-[400px] max-[440px]:w-[90%] max-[440px]:text-[30px] max-[440px]:mt-[-0.5em] text-center">WARM ATMOSPHERE</p>
        </div>
  <hr class="h-[2px] w-20 md:w-[160px] bg-[#109146] border-none mt-16 mb-12">
  <div class="flex justify-center items-center w-full overflow-x-auto">
  <div class="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 max-w-[280px]">
    <div v-for="(image, index) in images" :key="index" @click="openModal(index)" class="flex-none w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
      <img :src="image.src" class="cursor-pointer w-full h-full object-cover" alt="Gallery Image">
    </div>
  </div>
</div>
</section>

<section class="flex flex-col items-center justify-center w-full pt-[55px]">
  <div class="flex flex-col items-center text-center">
    <div class="relative flex justify-center">
      <p class="text-[40px] sm:text-[75px] relative tracking-[-1px]" style="font-family: Kaushan Script, cursive; font-weight: 400; font-style: normal; color: rgba(218, 223, 227, 0.6);">Welcome to zelena fabrika</p>
      <p class="text-[20px] sm:text-[40px] absolute mt-[1.3em] uppercase text-[#25292d]">Welcome to zelena fabrika</p>
    </div>
    <hr class="h-[2px] w-[80px] sm:w-[160px] bg-[#109146] border-none my-8">
    <p class="w-[90%] mb-[17px] text-[12px] sm:text-[15px] text-[#7b7e81]">We welcome you to a delicious feast of exquisite dishes in Artichaut. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant! Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet!</p>
    <button class="mt-[2em] text-[10px] sm:text-[14px] uppercase tracking-[0.5px] bg-[#109146] rounded-[6px] py-[12px] sm:py-[16px] px-[40px] sm:px-[50px] text-[white] button-ani-diff mb-[3em]">Rezerviraj</button>
    <img src="../assets/dekoracija.webp" alt="" class="w-[90%] sm:w-[576px] h-[36px] mt-[20px] mb-[5em]">
  </div>
</section>
</template>

<script>

export default {
  data() {
    return {
      images: [
        { src: 'https://via.placeholder.com/500x300' },
        { src: 'https://via.placeholder.com/600x400' },
        { src: 'https://via.placeholder.com/400x500' },
        { src: 'https://via.placeholder.com/700x450' },
        { src: 'https://via.placeholder.com/550x350' }
      ],
      showModal: false,
      currentImageIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    openModal(index) {
      this.currentImageIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>