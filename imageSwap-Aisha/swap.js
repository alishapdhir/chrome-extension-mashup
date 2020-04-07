var images = [
    "https://media.giphy.com/media/26gsdS1KCyxwTl6IU/source.gif",
    "https://media.giphy.com/media/Igiy7FvrsJLr3KFEUL/source.gif",
    "https://media.giphy.com/media/3o7WIHtdLD2fXURIFG/source.gif"
];
window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }
}
