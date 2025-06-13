function CatagorySelect(){

    const Catagory = document.querySelectorAll(".Catagory");
    const pill = document.querySelector(".MoveablePill");    
    const Projects = document.getElementById("ProjectList");
    const ProjectItem = Projects.getElementsByTagName("div");
    var a

    Catagory.forEach((catagory) => {
        pill.classList.remove(catagory.id);
        catagory.addEventListener("click", (event) => {
            const clicked = event.currentTarget;
            if (pill.classList.contains(clicked.classList)){
                return;
            }
            pill.classList.add(catagory.id);

            // var count = 0;
            // for(i = 0; i < ProjectItem.length; i++){
            //     if(ProjectItem[i].id.includes(catagory.id)){
            //         ProjectItem[i].classList.remove("hidden");    
            //         count++;
            //     } else{
            //         ProjectItem[i].classList.add("hidden");
            //     }
            // }

            // if(count == 0){
            //     document.getElementById("NoResult").style.display="block";
            // }else{
            //     document.getElementById("NoResult").style.display="none";
            // }
        })
    })
}
