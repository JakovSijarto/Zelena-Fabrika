import{_ as c}from"./dekoracija-0909f060.js";import{_ as m,o as s,a as r,b as e,t as o,d as p,F as d,r as x,c as u,n as h}from"./index-363c35bf.js";const f="/Zelena-Fabrika/assets/quoted-06ff1ead.svg",y={data(){return{testimonials:[{image:"https://via.placeholder.com/150",description:"Totally stunning atmosphere and friendly personnel! I’m amazed with your menu positions and meals taste! Thank you for your professional attitude to your work and for your attention to details! Perfect restaurant! Me and my family will definitely visit your again..",name:"John Doe"},{image:"https://via.placeholder.com/150",description:"Totally stunning atmosphere and friendly personnel! I’m amazed with your menu positions and meals taste! Thank you for your professional attitude to your work and for your attention to details! Perfect restaurant! Me and my family will definitely visit your again..",name:"Jane Smith"},{image:"https://via.placeholder.com/150",description:"I loved your cuisine, ambience and service! A combination of al these elements is perfect here. I visited the restaurant with my friends and I was amazed by its interior and rich menu! Thanks for your great job! Your desserts are awesome and very lovely. Nulla tincidunt euismod justo, non laoreet tellus maximus dapibus. Praesent porttitor ante ac mattis volutpat.",name:"Alice Johnson"},{image:"https://via.placeholder.com/150",description:"Totally stunning atmosphere and friendly personnel! I’m amazed with your menu positions and meals taste! Thank you for your professional attitude to your work and for your attention to details! Perfect restaurant! Me and my family will definitely visit your again..",name:"Robert Brown"},{image:"https://via.placeholder.com/150",description:"I’m new in the city and I was recommended to visit Artichaut by my friends. I’m very grateful for this recommendation! Great cuisine, fast service and extremely stylish interior - that’s all I love in restaurants! I appreciated your serving and your professional staff.",name:"Emily Davis"}],currentPage:1,testimonialsPerPage:1,intervalId:null}},computed:{totalPages(){return Math.ceil(this.testimonials.length/this.testimonialsPerPage)},paginatedTestimonials(){const i=(this.currentPage-1)*this.testimonialsPerPage,l=i+this.testimonialsPerPage;return this.testimonials.slice(i,l)}},mounted(){this.startAutoChange()},beforeUnmount(){this.stopAutoChange()},methods:{startAutoChange(){this.intervalId=setInterval(()=>{this.currentPage=this.currentPage<this.totalPages?this.currentPage+1:1},3500)},stopAutoChange(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}},g={class:"flex flex-col items-center w-full pt-40 px-4 md:px-8"},v=u('<div class="relative flex justify-center"><p class="text-[75px] relative tracking-[-1px] max-[440px]:text-[40px]" style="font-family:Kaushan Script, cursive;font-weight:400;font-style:normal;color:rgba(218, 223, 227, 0.6);">About us</p><p class="text-[40px] absolute mt-[1.3em] uppercase text-[#25292d] max-[760px]:w-[400px] max-[440px]:w-[90%] max-[440px]:text-[30px] max-[440px]:mt-[-0.5em] text-center">Who we are</p></div><div class="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 md:gap-8 pt-8"><img src="https://via.placeholder.com/500x300" alt="" class="h-64 md:h-80 w-full md:w-1/2 object-cover"><div class="py-4 text-gray-600 text-sm md:text-base"><h1 class="text-gray-800 text-lg md:text-xl uppercase pb-2">A FEW WORDS ABOUT US</h1><p class="mb-6">When visiting our European restaurant, just brace yourself to immersing into enjoying a truly delicious and perfectly cooked dishes.</p><p class="mb-8">The world-renowned chef showcases exhilarating interpretations of European food in a breathtaking space architect Tadao Ando built as a respite from the non-stop chaos of New York City.</p><h1 class="text-gray-800 text-lg md:text-xl uppercase pb-2">WHY CHOOSE US</h1><p>We welcome every person to visit our restaurant! Everyone can find its perfect table and try incredible dish from our chef! We work for people to deliver great mood, create cozy atmosphere and make your time awesome and fun! Delivering the best service is our core value, as people come to us to have a rest, and we’re providing their perfect residence.</p><button class="mt-8 text-sm uppercase tracking-wider bg-green-700 rounded-md py-3 px-6 text-white">Rezerviraj</button></div></div><img src="'+c+'" alt="" class="w-128 h-9 my-16"><div class="mb-8 flex justify-center"><p class="text-[75px] relative tracking-[-1px] max-[440px]:text-[40px]" style="font-family:Kaushan Script, cursive;font-weight:400;font-style:normal;color:rgba(218, 223, 227, 0.6);">Our stuff</p><p class="text-[40px] absolute mt-[1.3em] uppercase text-[#25292d] max-[760px]:w-[400px] max-[440px]:w-[90%] max-[440px]:text-[30px] max-[440px]:mt-[-0.5em] text-center">MEET OUR TEAM</p></div><ul class="flex flex-wrap justify-center w-full max-w-6xl gap-8 pb-16"><li class="flex flex-col items-center"><img src="https://via.placeholder.com/500x300" alt="" class="w-60 h-80 object-cover"><p class="text-gray-800 text-lg pt-4">DAYLE PETERS</p><p class="text-gray-600 text-sm">head chef</p></li><li class="flex flex-col items-center"><img src="https://via.placeholder.com/500x300" alt="" class="w-60 h-80 object-cover"><p class="text-gray-800 text-lg pt-4">DAYLE PETERS</p><p class="text-gray-600 text-sm">head chef</p></li><li class="flex flex-col items-center"><img src="https://via.placeholder.com/500x300" alt="" class="w-60 h-80 object-cover"><p class="text-gray-800 text-lg pt-4">DAYLE PETERS</p><p class="text-gray-600 text-sm">head chef</p></li><li class="flex flex-col items-center"><img src="https://via.placeholder.com/500x300" alt="" class="w-60 h-80 object-cover"><p class="text-gray-800 text-lg pt-4">DAYLE PETERS</p><p class="text-gray-600 text-sm">head chef</p></li></ul>',5),w={class:"flex flex-col items-center w-full pt-20 px-4 md:px-8"},b=e("div",{class:"flex justify-center"},[e("p",{class:"text-[75px] relative tracking-[-1px] max-[440px]:text-[40px]",style:{"font-family":"Kaushan Script, cursive","font-weight":"400","font-style":"normal",color:"rgba(218, 223, 227, 0.6)"}},"Our stuff"),e("p",{class:"text-[40px] absolute mt-[1.3em] uppercase text-[#25292d] max-[760px]:w-[400px] max-[440px]:w-[90%] max-[440px]:text-[30px] max-[440px]:mt-[-0.5em] text-center"},"MEET OUR TEAM")],-1),_={class:"p-6 md:p-12 w-full max-w-6xl mx-auto bg-white rounded-xl flex flex-col space-y-4"},k={key:0,class:"text-center flex justify-center items-center flex-col py-4"},P=e("img",{src:f,alt:"Quoted Icon",class:"mx-auto w-8 h-8"},null,-1),E={class:"text-gray-600 my-4 w-full md:w-4/5 text-center"},T=["src"],I={class:"text-lg font-semibold pb-4"},j={class:"flex justify-center mt-4"},A=["onClick"];function S(i,l,C,D,n,t){return s(),r("div",g,[v,e("div",w,[b,e("div",_,[t.paginatedTestimonials.length?(s(),r("div",k,[P,e("p",E,o(t.paginatedTestimonials[0].description),1),e("img",{src:t.paginatedTestimonials[0].image,alt:"Testimonial Image",class:"mx-auto rounded-full w-24 h-24 object-cover mb-4"},null,8,T),e("h2",I,o(t.paginatedTestimonials[0].name),1)])):p("",!0),e("div",j,[(s(!0),r(d,null,x(t.totalPages,a=>(s(),r("button",{key:a,class:h(["mx-1 px-3 py-1 border rounded transition bg-black",n.currentPage===a?"bg-white text-black":"bg-black text-white"]),onClick:R=>n.currentPage=a},o(a),11,A))),128))])])])])}const z=m(y,[["render",S]]);export{z as default};
