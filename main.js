const app = Vue.createApp({
 data(){
     return {
         cart : 0,
         product : {name:"socks",description:"This is green socks"},
         brand : "vue.js",
         url : "https://www.google.com",
         target : "_blank",
         selectedVariant: 0,
         onSale : false,
         details : ["50% cotton" , "30% wool " , "20% polyester"],
         variants : [
             {id:22 , color : "green" , image : "./assets/images/socks_green.jpg",quantity :20 , onSale :true},
             {id:33 , color : "blue" , image: './assets/images/socks_blue.jpg', quantity: 0 , onSale: false},
             {id:54 , color : "red" , image: './assets/images/socks_red.jpg', quantity: 3 , onSale: false}
         ],
         sizes: ['big','medium','small'],

     }
 },
    methods: {
        addToCart(){
            this.cart ++;
        },
        updateVariant(index){
         this.selectedVariant=index;
         this.onSale=this.variants[index].onSale
        },
        removeFromCart(){
            if (this.cart > 0)
                this.cart--;
        }
    },
    computed:{
     title(){
         if(this.onSale === true){
             return this.product.name + ' ' + this.brand;
         }
     },
     image() {
        return  this.variants[this.selectedVariant].image
        },
        inStock(){
          return this.variants[this.selectedVariant].quantity > 0;
        }

    }
});
