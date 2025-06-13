function CatagorySelect(){

    const Catagory = document.querySelectorAll(".Catagory");
    const pill = document.querySelector(".MoveablePill")
;    
    Catagory.forEach((catagory) => {
        pill.classList.remove(catagory.id);
        catagory.addEventListener("click", (event) => {
            const clicked = event.currentTarget;
            if (pill.classList.contains(clicked.classList)){
                return;
            }
            pill.classList.add(catagory.id);
        })
    })
}