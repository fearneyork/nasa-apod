exports.fetchImageData = (imageUrl) => {
    return fetch(imageUrl)
    .then((response) => response.json())
    .then((body) => {
        return body;
    });
}