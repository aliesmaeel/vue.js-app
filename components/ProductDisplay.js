app.component('product-display',{
 props: {
premium: {
    type:Boolean,
    required:true
},
     cartlen: {
     type:Number,
     required: true
     }
 },
 template : `  <div class="product-display">
        <div class="product-container">
          <div class="product-image">
          <img :src="image" :class="{'out-of-stock-img' : !inStock}">
            <a :href="url" :target="target" >More images</a>
          </div>
          <div class="product-info">
            <h1 class="product-title">{{title}}</h1>
            <div>{{product.description}}</div>
            <div class="product-flex">
              <h3 v-if="inStock">in Stock</h3>
              <h3 v-else>Out Of Stock</h3>
              <h3 v-if="onSale">On Sale</h3>
              <p>Shipping {{shipping }} </p>
            </div>
            <div class="product-flex">
             <product-details :details="details"></product-details  >
              <ul>
                <li v-for="(variant,index) in variants" :key="variant.id"
                    @mouseover="updateVariant(index)" class="color-circle"
                 :style="{backgroundColor:variant.color}"></li>
              </ul>
              <ul>
                <li v-for="size in sizes">{{size}}</li>
              </ul>
            </div>
            <div class="product-flex">
              <button class="button" @click="addToCart" :disabled="!inStock"
                      :class="{disabledButton : !inStock}"
               >Add To Cart</button>
              <button class="button" @click="removeFromCart">Remove form Cart</button>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
          </div>
        </div>
      </div>`,
    data(){
        return {
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
            reviews : []

        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id);
        },
        updateVariant(index){
            this.selectedVariant=index;
            this.onSale=this.variants[index].onSale
        },
        removeFromCart(){
            if (this.cartlen > 0)
                this.$emit('remove-from-cart',this.variants[this.selectedVariant].id);
        },
        addReview(review){
            this.reviews.push(review)
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
        },
        shipping(){
          return   this.premium ? "Premiun" : "Regular"
        }

    }
})