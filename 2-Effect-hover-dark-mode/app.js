const cursor = document.querySelector('#cursor');
window.onmousemove = (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}
