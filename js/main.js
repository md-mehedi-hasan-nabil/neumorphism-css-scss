const inputFile = document.getElementById('input-file');
const btn = document.getElementById('btn');
const img = document.getElementById('img');

inputFile.addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('image', reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

btn.addEventListener('click', () => {
    const imageUrl = localStorage.getItem('image');
    if (imageUrl) {
        img.setAttribute('src', imageUrl);
    }else{
        alert('image not found. you try again.')
    }
});
