<template>
    <div class="flex justify-center items-center flex-col pt-[15em] max-[415px]:pt-[10em]">
  <div class="relative flex justify-center">
    <p class="max-[315px]:text-[50px] text-[75px] relative tracking-[-1px]" style="font-family: Kaushan Script, cursive; font-weight: 400; font-style: normal; color: rgba(218, 223, 227, 0.6);">Location</p>
    <p class="max-[315px]:text-[30px] text-[40px] absolute mt-[1.3em] uppercase text-[#25292d]">CONTACT US</p>
  </div>
  <hr class="h-[2px] w-[80px] sm:w-[160px] bg-[#109146] border-none my-8">
  <p class="w-[60%] mb-[17px] text-center text-[12px] sm:text-[15px] text-[#7b7e81]">We welcome you to a delicious feast of exquisite dishes in Artichaut. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant! Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet!</p>
  <p class="py-2 sm:py-4 text-[12px] sm:text-[14px] max-[900px]:w-[90%] text-center">We are looking forward to hearing from you and seeing you as our guests!</p>
  <button class="mt-[2em] text-[10px] sm:text-[14px] uppercase tracking-[0.5px] bg-[#109146] rounded-[6px] py-[12px] sm:py-[16px] px-[40px] sm:px-[50px] text-[white] button-ani-diff">Pošalji poruku</button>
</div>
    <div class="w-full flex justify-center items-center flex-col h-[80em]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.4189824715118!2d19.265797100000004!3d42.4401007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb871266e079%3A0xea2fc8aab043cd8e!2sZelena%20Fabrika%201936!5e0!3m2!1shr!2shr!4v1711793745421!5m2!1shr!2shr" class="w-[1180px] h-[30em] max-[1225px]:w-[90%]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="relative flex justify-center w-full pt-[4em]">
          <p class="max-[315px]:text-[50px] text-[75px] relative tracking-[-1px]" style="font-family: Kaushan Script, cursive;font-weight: 400;font-style: normal; color: rgba(218, 223, 227, 0.6);">Email Us</p>
          <p class="max-[315px]:text-[30px] text-[40px] absolute mt-[1.3em] uppercase text-[#25292d]">CONTACT FORM</p>
        </div>
        <form action="" class="flex w-[1180px] gap-[2em] pt-[2em] max-[1225px]:w-[90%] max-[350px]:flex-col max-[350px]:gap-[1em]">
            <div class="">
                <input type="text" name="" id="" class="border w-full text-[14px] py-[15px] px-[18px] border border-[#ebeced]"  placeholder="Ime*" style="font-family: Montserrat, sans-serif;font-optical-sizing: auto;font-weight: 400;font-style: normal;">
                <input type="text" name="" id="" class="my-[1em] border w-full text-[14px] py-[15px] px-[18px] border border-[#ebeced]"  placeholder="Prezime*" style="font-family: Montserrat, sans-serif;font-optical-sizing: auto;font-weight: 400;font-style: normal;">
                <input type="email" name="" id="" class="border w-full text-[14px] py-[15px] px-[18px] border border-[#ebeced]"  placeholder="Email*" style="font-family: Montserrat, sans-serif;font-optical-sizing: auto;font-weight: 400;font-style: normal;">
            </div>
            <textarea name="" id="" class="border  w-full text-[14px] py-[15px] px-[18px] border border-[#ebeced]" placeholder="Poruka*" style="font-family: Montserrat, sans-serif;font-optical-sizing: auto;font-weight: 400;font-style: normal;"></textarea>
        </form>
        <button class="mt-[2em] text-[14px] uppercase tracking-[0.5px] bg-[#109146] rounded-[6px] py-[16px] px-[50px] text-[white] button-ani-diff">Pošalji poruku</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
textarea {   
  resize: none;
}
.button-ani-diff{
  transition: all 0.1s ease;
}
.button-ani-diff:hover{
  background:#25292d ;
  transition: all 0.1s ease-in-out;
}
</style>