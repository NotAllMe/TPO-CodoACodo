const { createApp } = Vue

createApp({
  data() {
    return {
      mascotas: [],
      url: 'https://tfohuellitas.pythonanywhere.com/mascotas',
      error: false,
      cargando: true,
      id:0,
      nombre:"", 
      imagen:"",
      edadmeses:"",
      sexo:"",
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.mascotas = data;
          this.cargando = false
        })
        .catch(err => {
          console.error(err);
          this.error = true
        })
    },
    eliminar(id) {
      const url = this.url + '/' + id;
      var options = {
        method: 'DELETE',
      }
      fetch(url, options)
        .then(res => res.text()) // or res.json()
        .then(res => {
          alert('Registro Eliminado')
          location.reload(); // recarga el json luego de eliminado el registro
        })
    }
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app')
