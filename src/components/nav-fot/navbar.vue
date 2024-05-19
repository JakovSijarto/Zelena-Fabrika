<template>
    <nav class="p-4 flex justify-center  items-center w-[100%] absolute z-[999] uppercase py-8 bg-white border-b" >
        <div class="w-[1180px] flex justify-between items-center max-[1000px]:w-full">
            <div class="flex items-center w-[200px]">
        LOGO
      </div>
      <div class="space-x-8 text-center max-[600px]:hidden">
        <router-link to="/" class="">Home</router-link>
        <router-link to="/about" class="">About</router-link>
        <router-link to="/meni" class="">Menu</router-link>
        <router-link to="/galerija" class="">Gallery</router-link>
        <router-link to="/contact" class="">Contact</router-link>
      </div>
      <div class=" max-[950px]:hidden">
        <button class="py-[16px] px-[40px] border bg-[#109146]  transition-button ">
          Book Your Table
        </button>
      </div>
        </div>
      
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>

  <style>
 
.router-link-active{
  color: #109146;
}
a{
  transition: all 0.2s ease-out;
}
a:hover{
color: #109146;
transition: all 0.2s ease-in;
}
.transition-button{
  transition: all 0.5s ease-out;
}
.transition-button:hover{
  background: #109146;
  transition: all 0.3s ease-out;
}
</style>