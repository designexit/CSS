// 모든 이미지 박스
const allImages = document.querySelectorAll('.images .img');
const lightbox = document.querySelector('.lightbox');
const closeImgBtn = lightbox.querySelector('.close-icon');

// 모든 이미지 박스 클릭 시 그 이미지의 주소를 라이트 박스에 전달
allImages.forEach(function(img){
  img.addEventListener('click', function(){
    showlightbox(img.querySelector('img').src);
  })
})


function showlightbox(imgPath){
  lightbox.querySelector('img').src = imgPath;
  lightbox.classList.add('show');
  document.body.style.overflow = 'hidden';
}

closeImgBtn.addEventListener('click', function(){
  lightbox.classList.remove('show');
  document.bady.style.overflow = 'auto';
})