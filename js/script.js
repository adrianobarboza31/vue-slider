// Descrizione:
// Partendo dal markup base fornito, fare uno slider usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 2 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)

    const{ createApp} = Vue 
    // console.log(slides);
    createApp({
        data() {
            return{
                name:"adri",
                index: 0,
                hover: false,
                slides:[
                    {
                        image: 'img/01.webp',
                            title: 'Marvel\'s Spiderman Miles Morale',
                            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        }, {
                            image: 'img/02.webp',
                            title: 'Ratchet & Clank: Rift Apart',
                            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        }, {
                            image: 'img/03.webp',
                            title: 'Fortnite',
                            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        }, {
                            image: 'img/04.webp',
                            title: 'Stray',
                            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        }, {
                            image: 'img/05.webp',
                            title: "Marvel's Avengers",
                            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        }
                    ]
            }
        },
        methods:{
            prima(){
                this.index--
                if(this.index < 0){
                    this.index = this.slides.length - 1
                }
            },
            dopo(){
                this.index++
                if (this.index > this.slides.length - 1){
                    this.index = 0;
                }
            },
            autoslider(){
                this.autoslider = setInterval(()=>{
                   this.dopo();
                },2000)
            },
            stopslider(){
                    clearInterval(this.autoslider)
                  
                

            }
        },
        mounted(){
            
            this.autoslider();  
        }
    }).mount("#app")