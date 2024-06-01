/*var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Segunda ves en el local host',
        see: true,
        pollerias: [
            { nombre: 'Pardos' },
            { nombre: 'Norkys' },
            { nombre: 'Kykos' },
            { nombre: 'La Leña' }
        ]
    }
})*/
var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Segunda vez en VUE',
        see: false,
        discotecas: [
            { 
                nombre: 'Discoteca El Duende Resto Lounge',
                imagen: 'app/./assets/img/ElDuende.png', 
                descripcion: 'Muy buena atención y excelente ambiente, la pase buenísimo, 100% recomendado con muy buenos tragos y excelente',
                ubicacion: 'Calle 123, Ciudad A'
            },
            { 
                nombre: 'Discoteca ValeTodo DownTown',
                imagen: 'app/./assets/img/valetodo.png',
                descripcion: 'Un excelente lugar para divertirse muy juvenil con shows A1, excelente música, ambientes separados por gustos musicales',
                ubicacion: 'Avenida 456, Ciudad B'
            },
            { 
                nombre: 'Discoteca Casona Forum',
                imagen: 'app/./assets/img/casaforum.png',
                descripcion: 'Hay zona de bar con musica en vivo retro, bar tipo terraza en el último piso, billar, discoteca con música variada',
                ubicacion: 'Plaza 789, Ciudad C'
            }
        ],
        valor1: "valor por defecto",
        venta: 0,
        envio: 0,
        subtotal: 0,
        impuestos: 0,
        total: 0,
        precios: {
            cerveza: 6.5,
            espumante: 12.5,
            vino: 15
        },
        cerveza: 0,
        espumante: 0,
        vino: 0,
        costos: {
            cerveza: 0,
            espumante: 0,
            vino: 0
        },
        tragos: {
            subtotal: 0,
            impuestos: 0,
            total: 0
        },
        cursos: [
            { nombre: 'Curso 1', nota: 0, peso: 0 },
            { nombre: 'Curso 2', nota: 0, peso: 0 },
            { nombre: 'Curso 3', nota: 0, peso: 0 },
            { nombre: 'Curso 4', nota: 0, peso: 0 }
        ],
        promedioPonderado: 0
    },
    methods: {
        showMessage: function () {
            this.see = true;
            const alerta = "Este es el titulo: " + this.titulo;
            alert(alerta);
        },
        calcularMonto: function() {
            this.subtotal = Number(this.venta) + Number(this.envio);
            this.impuestos = Number(this.subtotal)*0.18;
            this.total = Number(this.subtotal) + Number(this.impuestos);
        },
        calculaTotalesTragos: function() {
            this.tragos.cantidad = Number(this.cerveza) + Number(this.espumante) + Number(this.vino);
            this.tragos.subtotal = Number(this.costos.cerveza) + Number(this.costos.espumante) + Number(this.costos.vino);
            this.tragos.impuestos = Number(this.tragos.subtotal)*0.18;
            this.tragos.total = Number(this.tragos.subtotal) + Number(this.tragos.impuestos);
        },
        calcularCerveza: function() {            
            const precio = this.precios.cerveza*Number(this.cerveza);
            this.costos.cerveza = precio;
            this.calculaTotalesTragos();
        },
        calcularEspumante: function() {
            const precio = this.precios.espumante*Number(this.espumante);
            this.costos.espumante = precio;
            this.calculaTotalesTragos();
        },
        calcularVino: function() {
            const precio = this.precios.vino*Number(this.vino);
            this.costos.vino = precio;
            this.calculaTotalesTragos();
        },
        calcularPromedioPonderado: function() {
            let totalNotas = 0;
            let totalPesos = 0;
            for (let curso of this.cursos) {
                totalNotas += curso.nota * curso.peso;
                totalPesos += Number(curso.peso);
            }
            this.promedioPonderado = totalPesos ? (totalNotas / totalPesos).toFixed(2) : 0;
        }
    },
    watch: {
        // Observadores para recalcular el promedio ponderado automáticamente
        cursos: {
            handler: function() {
                this.calcularPromedioPonderado();
            },
            deep: true
        }
    }
});