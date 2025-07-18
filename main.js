const app = Vue.createApp({
 data : function (){
     return {
         product : {name:"socks",description:"This is green socks"},
         image : "./assets/images/socks_blue.jpg",
         url : "https://www.google.com",
         target : "_blank",
         inStock : false,
         onSale : true,
         details : ["50% cotton" , "30% wool " , "20% polyester"],
         variants : [{id:22 , color : "green"},{id:33 , color : "white"}],
         sizes: ['big','medium','small']
     }
 }
});
