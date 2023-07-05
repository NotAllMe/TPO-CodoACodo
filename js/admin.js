const { createApp } = Vue
createApp({
    data() {
        return {
            mascotas: [],
            //url:'http://localhost:5000/productos', 
            // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
            url: 'https://tfohuellitas.pythonanywhere.com/mascotas',   // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            imagen: "",
            edadmeses: "",
            sexo: "",
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
        },
        grabar() {
            let mascota = {
                nombre: this.nombre,
                edadmeses: this.edadmeses,
                sexo: this.sexo,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(mascota),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./adopcion_admin.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })
        },
        getImg(imagen) {
            return './img/' + imagen;
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
