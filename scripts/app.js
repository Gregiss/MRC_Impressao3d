var app = new Vue({
    el: "#app",
    data: {
        links: [{"name" : "Inicio", "ativo" : true, "acessou": true}
        ,{"name" : "Contato", "ativo" : false, "acessou": false},
        {"name" : "Loja", "ativo" : false, "acessou": false}
        ],
        acessei: {"name" : "Inicio", "ativo" : true, "acessou": true},
        produtos: [
            {"name" : "Faca Adaga das Sombras CS:GO", "preco" : 20, "img" : "./produtos/1.jpg"},
            {"name" : "Suporte de tomada para celular", "preco" : 15 , "img" : "./produtos/2.jpg"},
            {"name" : "Polvo", "preco" : 30 , "img" : "./produtos/3.jpg"},
            {"name" : "Dinossauro Flexível", "preco" : 20 , "img" : "./produtos/4.jpg"}
        ],
        view: false,
        vendo: {}
    },
    methods: {
       acessarLink(link){
            for(var i = 0; i < this.links.length;i++){
                this.links[i].ativo = false
                this.links[i].acessou = false
            }
            const index = this.links.indexOf(link)
            link.ativo = true
            link.acessou = true
            this.links[index] = link
            this.acessei = link
            return false
       },
       viewImage(image){
        this.view = true
        this.vendo = image
       },
       close(){
           this.view = false
       }
    }
})