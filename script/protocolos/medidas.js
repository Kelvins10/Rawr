(function(){
    const medidastitle = [...document.querySelectorAll('.medidas-title')];
    // console.log(medidastitle)
    
    medidastitle.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('medidas-padding--add');
            question.children[0].classList.toggle('medidas-arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();