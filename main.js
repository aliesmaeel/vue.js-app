const app = Vue.createApp({
 data(){
     return {
         cart : 0,
         product : {name:"socks",description:"This is green socks"},
         image : "./assets/images/socks_blue.jpg",
         url : "https://www.google.com",
         target : "_blank",
         inStock : false,
         onSale : true,
         details : ["50% cotton" , "30% wool " , "20% polyester"],
         variants : [
             {id:22 , color : "green" , image : "./assets/images/socks_green.jpg"},
             {id:33 , color : "blue" , image: './assets/images/socks_blue.jpg'}
         ],
         sizes: ['big','medium','small'],

     }
 },
    methods: {
        addToCart(){
            this.cart ++;
        },
        updateImage(image){
            this.image=image;
        },
        removeFromCart(){
            if (this.cart > 0)
                this.cart--;
        }
    }
});
