optionsBtn.addEventListener('click', () => {
    const isExpanded = optionsMenu.classList.contains('d-block');
    optionsBtn.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
        optionsMenu.classList.remove('d-block');
        optionsMenu.classList.add('d-none');
    } else {
        optionsMenu.classList.remove('d-none');
        optionsMenu.classList.add('d-block');
    }
});