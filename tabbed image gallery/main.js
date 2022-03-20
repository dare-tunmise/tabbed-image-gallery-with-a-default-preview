function myFunction (imgs) {
    const expandimg = document.getElementById('expandedimg');

    expandimg.src = imgs.src;

    expandimg.parentElement.style.display ='block';
};