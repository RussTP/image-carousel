

export default class Carousel {
    constructor() {
        this.currentIndex = 0
        this.images = [
    {
    name: "ghost",
    path: new URL("./images/ghost.jpg", import.meta.url),   
    alt: "Ghost costume, trick or treating"
},
{
    name: "it",
    path: new URL("./images/it.jpg", import.meta.url),
    alt: "IT Stephen King Book image"
},
{
    name: "pumpkin",
    path: new URL("./images/pumpkin.jpg", import.meta.url),
    alt: "jackolantern trick or treating"

},
{
   name: "witch",
   path: new URL("./images/witch.jpg", import.meta.url),
   alt: "Witch in a creepy field"
}
];
    }

    previousImage() {
         this.currentIndex--;
        if (this.currentIndex < 0) {
        this.currentIndex = this.images.length -1;
        }
        return this.images[this.currentIndex];
    }

    nextImage() {
        this.currentIndex++;
        if (this.currentIndex > this.images.length -1) {
            this.currentIndex = 0;
        }
        return this.images[this.currentIndex];
    }


    activeImage() {

        const images = document.querySelectorAll(".dot");
        images.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === this.currentIndex) {
                 dot.classList.add("active");
                
            }
       
         });
    }
}