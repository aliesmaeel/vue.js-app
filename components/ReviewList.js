app.component('review-list',{
    props:{
        reviews: {
            type: Array,
            required :true
        }
    },
    template:
    `<div class="review-container">
    <h3>Reviews</h3>
    <ul>
    <li v-for="(review,index) in reviews" :key="index">
    {{review.name}} gave us  {{review.rating}} starts Rating with this comment
    <br>
    "{{review.review}}" -- user recommend = {{review.recommend}}
</li>
</ul>
</div>`
});