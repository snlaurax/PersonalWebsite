<!-- Carousel.svelte -->
<script>
  let currentImageIndex = 0;
  let images = ['Group 7.png', 'Group 8.png']; // Replace with your image URLs
  const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };
  const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  };
</script>

<style>
  /* Add your carousel styles here */
</style>

<div class="carousel">
  <button on:click={prevImage}>Previous</button>
  <img src={images[currentImageIndex]} alt="Carousel Image">
  <button on:click={nextImage}>Next</button>
</div>
