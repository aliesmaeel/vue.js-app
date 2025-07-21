app.component('review-form',{
    template :
    `<form class="review-form" @submit.prevent="onSubmit">
    <h1>leave a review</h1>
    <label for="name">Name</label>
    <input id="name" v-model="name">
    
    <label for="review">Review :</label>
    <textarea id="review" v-model="review"></textarea>
    
     <label for="rating">Rating :</label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <br>
    <div class="product-flex">
    <label for="recommend">Recommend this product ?</label>
    <input type="checkbox" v-model="recommend" >
</div>
    
    
    <input class="button" type="submit" value="Submit">
</form>`,
    data(){
        return {
            name : '',
            review : '',
            rating : null,
            recommend:false
        }

    },
    methods :{
        onSubmit(){
            if (this.name ==='' || this.review===''|| this.rating===null){
                alert('empty data')
                return;
            }


            let productReview={
                name : this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted',productReview);
            this.name='';
            this.review='';
            this.rating=null
            this.recommend=false
        }
    }
})