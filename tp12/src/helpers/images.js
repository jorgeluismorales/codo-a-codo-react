import imagesData from '../data/images.json';

export const images = (n) => {
    const imagesArray = [];

    for (let i = 0; i < n; i++) {
        const imageIndice = Math.floor(Math.random() * imagesData.length);
        imagesArray.push(imagesData[imageIndice]);
    }
    return imagesArray;
};