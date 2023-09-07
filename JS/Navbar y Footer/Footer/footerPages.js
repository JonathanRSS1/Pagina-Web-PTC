function generarFooterPages()
{
    const footerPages = `<div class="header1">

    <!--Content before waves-->
    <div class="inner-header flex">
    <!--Just the logo.. Don't mind this-->
    
    <h1>SUPERMARKET STORAGE SYSTEM</h1>
    </div>
    
    <p></p>
    
    <!--Waves Container-->
    <div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
    </g>
    </svg>
    </div>
  
    <footer class="bg-light text-center text-white">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4">
        
  </div>
  
  
          <!-- Instagram -->
          <a class="btn btn-outline-light btn-floating m-1"
          style="background-color: #3b5998;"
        href="#!"
        role="button"
            ><i class="bi bi-instagram"></i></a>
    
          
          <a class="btn btn-outline-light btn-floating m-1" style="background-color: #3b5998;"
          href="#!"
          role="button"
            ><i class="bi bi-facebook"></i></a>
    
          <!-- Github -->
          <a class="btn btn-outline-light btn-floating m-1" 
          style="background-color: #3b5998;"
        href="#!"
        role="button"
            ><i class="bi bi-messenger"></i>
          </a>
  
          <a class="btn btn-outline-light btn-floating m-1" 
          style="background-color: #3b5998;"
        href="#!"
        role="button"
            ><i class="bi bi-linkedin"></i
          ></a>
  
  
          <a class="btn btn-outline-light btn-floating m-1" 
          style="background-color: #3b5998;"
          href="#!"
          role="button"
          ><i class="bi bi-twitter"></i>
          </a>
  
  
          <a class="btn btn-outline-light btn-floating m-1"
          style="background-color: #3b5998;"
          href="#!"
          role="button"
            ><i class="bi bi-envelope-at-fill"></i></a>
    
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: #fff;">
        <a href="">© 2020 Copyright:</a>
        <a class="text-black" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>`;

  return footerPages;
}