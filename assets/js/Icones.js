class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones() {
        TweenMax.to(this.listaIcones, 3, {scale: 0.85, repeat: -1, yoyo: true})
    }
}

export { Icones }