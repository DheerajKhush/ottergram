var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

var thumbnails = 	document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
var detailImage = 	document.querySelector(DETAIL_IMAGE_SELECTOR);
var detailTitle = 	document.querySelector(DETAIL_TITLE_SELECTOR);

thumbnails.forEach(function(thumbnail){
	thumbnail.addEventListener('click', function(event){
		event.preventDefault();
		detailImage.src = this.dataset.imageUrl;
		detailTitle.innerHTML = this.dataset.imageTitle;
	})
})