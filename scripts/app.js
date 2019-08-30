var app = new Vue({
    el: "#app",
    data: {
        links: [{"name" : "Inicio", "ativo" : true, "acessou": true},{"name" : "Contato", "ativo" : false, "acessou": false}],
        acessei: {"name" : "Inicio", "ativo" : true, "acessou": true}
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
       }
    }
})