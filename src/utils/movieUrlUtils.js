import NO_IMAGE_PLACEHOLDER from '../images/no-image-found/no-image.png';

const BASE_THIRD_PARTY_URL = 'https://api.nomoreparties.co';
const BASE_FRONTEND_URL = 'https://movies.project.nomoredomains.monster';
const DEFAULT_TRAILER_LINK = 'https://www.youtube.com/';

function isUrlValid(url) {

  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
}

// image
function getValidImageUrl(data) {

  if (!data.image) {

    return `${BASE_FRONTEND_URL}${NO_IMAGE_PLACEHOLDER}`
  }

  // saved-movie case
  if (isUrlValid(data.image)) {

    return data.image;
  }

  // api movie case
  if (isUrlValid(data.image.url)) {

    return data.image.url;
  }

  return `${BASE_THIRD_PARTY_URL}${data.image.url}`;
}

// thubnail
function getValidPreviewUrl(data) {

  if (isUrlValid(data.thumbnail)) {

    return `${BASE_FRONTEND_URL}${data.thumbnail}`
  }

  if(!data.image){
    return `${BASE_THIRD_PARTY_URL}${NO_IMAGE_PLACEHOLDER}`;
  }

  if (isUrlValid(data.image.previewUrl)) {

    return data.image.previewUrl;
  }

  return `${BASE_THIRD_PARTY_URL}${NO_IMAGE_PLACEHOLDER}`;
}

// trailer
function getValidTrailerUrl(data) {


  if (isUrlValid(data.trailer) ) {

    return `${data.trailer}`
  }

  if (isUrlValid(data.trailerLink)) {

    return data.trailerLink;
  }

  return `${DEFAULT_TRAILER_LINK}`;
}

export {
  getValidImageUrl,
  getValidPreviewUrl,
  getValidTrailerUrl
};
