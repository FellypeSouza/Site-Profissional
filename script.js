let open = document.getElementById('menu_open');
let close = document.getElementById('menu_close');
let content = document.getElementById('menu_content');

open.addEventListener('click', ()=>{
    content.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'inline';
})

close.addEventListener('click', ()=>{
    content.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'inline';
})