import Carousel from "./carousel.js";
import Controller from "./controller.js";

export default class Display {
    constructor(){
     this.carousel = new Carousel();
     this.controller = new Controller(this.carousel, this);
     this.bindEvents();
    }


    bindEvents() {
        this.showImage(this.controller.carousel.images[0]);
        this.displayPrevious();
        this.displayNext();
        this.controller.activatedImage();
        this.controller.imageTimer();       
    }

    showImage(imageObj) {
        const image = document.querySelector("#carousel-image");
        image.src = imageObj.path;
        image.name = imageObj.name;
        image.alt = imageObj.alt;
    }

    displayPrevious() {
    const previousButton = document.querySelector("#previous-btn");
    previousButton.addEventListener("click", () => {
         console.log("clicked previous btn")
     const newImage = this.controller.previousButton();
     this.showImage(newImage);
     this.controller.activatedImage();
     

       
    });
}

    displayNext() {
    const nextButton = document.querySelector("#next-btn");
    nextButton.addEventListener("click", () => {
        const newImage = this.controller.nextButton();
        this.showImage(newImage);
        this.controller.activatedImage();
     
    });
}
}