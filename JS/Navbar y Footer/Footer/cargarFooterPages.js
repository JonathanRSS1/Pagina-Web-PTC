document.addEventListener('DOMContentLoaded',function(){

    const FooterContainer = document.getElementById('footerContainer');
    const FooterHTML = generarFooterPages();
    FooterContainer.innerHTML = FooterHTML;
})