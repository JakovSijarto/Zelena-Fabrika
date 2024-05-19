<template>
    <div class="flex w-full flex-col items-center bg-[#25292d] py-[36px] px-4">
        <div class="flex w-[1180px] max-[1180px]:w-full justify-between items-center max-[470px]:flex-col max-[470px]:gap-[3em]">
            <ul class="text-[#97999b] text-[15px] text-center">
                <li class="!text-[20px] !text-[#fff]">ADDRESS</li>
                <li >23 Novaka Miloševa,</li>
                <li>Podgorica 81000,</li>
                <li>Crna Gora</li>
            </ul>
            <ul>
                <li class="!text-[20px] !text-[#fff]">FOLLOW US</li>
                <li class="flex gap-3 justify-center mt-2 ">
                    <img src="../../assets/facebook.svg" alt="" class="w-[26px] h-[26px]">
                    <img src="../../assets/instagram.svg" alt="" class="w-[26px] h-[26px]">
                </li>
            </ul>
            <ul class="text-[#97999b] text-[15px] text-center">
                <li class="!text-[20px] !text-[#fff]">CONTACT US</li>
                <li>+1 800 603 6035</li>
                <li>mail@demolink.org</li>
            </ul>
        </div>
        
    </div>
    <div class="flex w-full flex-col items-center bg-[#212428] py-[36px] px-4 ">
        <div class="flex w-[1180px] max-[1180px]:w-full justify-between items-center max-[710px]:flex-col max-[710px]:gap-[1em]">
            <span style="color:rgba(255, 255, 255, 0.5); font-size:13px;" class="text-center">Zelena Fabrika © 2024. All rights reserved.</span>
            <ul class="uppercase flex gap-[2em] text-white hover_li cursor-pointer text-[#97999B] max-[470px]:hidden">
                <li><router-link to="/" class="">Home</router-link></li>
                <li><router-link to="/about" class="">About</router-link></li>
                <li><router-link to="/meni" class="">Menu</router-link></li>
                <li><router-link to="/galerija" class="">Gallery</router-link></li>
                <li><router-link to="/contact" class="">Contact</router-link></li>
            </ul>
        </div>
        
    </div>
    
</template>

<script setup>

</script>

<style scoped>
.hover_li > li:hover{
    color:#fff;
    transition:all 0.3s ease-in;
}
</style>