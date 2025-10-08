
export default class Controller {
    constructor(carousel, display) {
    this.carousel = carousel
    this.display = display
    }

    previousButton() {
    const image = this.carousel.previousImage();
    return image;
    }

    nextButton() {
    const image = this.carousel.nextImage();
    return image;
    }

    activatedImage() {
    this.carousel.activeImage();

    }

      imageTimer() {
        setInterval(() => {
             this.carousel.nextImage();
             this.display.showImage(this.carousel.images[this.carousel.currentIndex]);
             this.activatedImage();
        }, 4000);
    }

    }

    