const { createApp } = Vue;
  createApp({
    data() {
      return {
        url:"./js/perros.json",
        perros:[]
      }
    },
    methods: {
        fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.perros=data.perros;
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
        this.fetchData(this.url)}
  }).mount('#app')
