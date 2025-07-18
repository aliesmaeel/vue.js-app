const app = Vue.createApp({
 data : function (){
     return {
         product : {name:"socks",description:"This is green socks"},
         image : "./assets/images/socks_blue.jpg",
         url : "https://www.google.com",
         target : "_blank"
     }
 }
});
