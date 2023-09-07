document.addEventListener('DOMContentLoaded',function(){

    const FooterContainer = document.getElementById('footerContainer');
    const FooterHTML = generarFooterIndex();
    FooterContainer.innerHTML = FooterHTML;
})