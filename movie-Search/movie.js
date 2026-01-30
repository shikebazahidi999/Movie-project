const hbtn = document.getElementById('hbtn');
const rbtn = document.getElementById("rbtn");
const sbtn = document.getElementById("sbtn");
const cbtn = document.getElementById("cbtn");
const horrordiv = document.getElementById("horror");
const romantictiv = document.getElementById("romantic");
const spiderdiv = document.getElementById("spider");
const comedydiv = document.getElementById("comedy");
const input = document.getElementById("input");
const movies = document.querySelectorAll(".movie");
const searchbtn = document.getElementById("searchbtn");
const catagory = document.querySelectorAll(".catagory")
const seactions = [horrordiv,romantictiv,spiderdiv,comedydiv]

// horror button part
      movies.forEach(box => {
   
      box.classList.add("opacity-0", "translate-y-8");

    }); // هر دیو با 150 میلی‌ثانیه فاصله ظاهر می‌شود

hbtn.addEventListener("click",()=>{
    if(horrordiv.classList.contains("hidden")){
        horrordiv.classList.remove("hidden");
        horrordiv.classList.add("flex");
        romantictiv.classList.remove("flex");
        romantictiv.classList.add("hidden");
        spiderdiv.classList.remove("flex");
        spiderdiv.classList.add("hidden")
        comedydiv.classList.remove("flex");
        comedydiv.classList.add("hidden");
        input.value= "horror";
    }
  movies.forEach((box, index) => {
    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-y-8");
      box.classList.add("opacity-100", "translate-y-0","transition-All","duration-500");
    }, index * 500); // هر دیو با 150 میلی‌ثانیه فاصله ظاهر می‌شود
  });
});

// romantic button part
rbtn.addEventListener("click",()=>{
    if(romantictiv.classList.contains("hidden")){
         horrordiv.classList.remove("flex");
        horrordiv.classList.add("hidden");
        romantictiv.classList.remove("hidden");
        romantictiv.classList.add("flex");
        spiderdiv.classList.remove("flex");
        spiderdiv.classList.add("hidden")
        comedydiv.classList.remove("flex");
        comedydiv.classList.add("hidden");
        input.value = "Romantic";
    }
     movies.forEach((box, index) => {
    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-y-8");
      box.classList.add("opacity-100", "translate-y-0","transition-All","duration-500");
    }, index * 500); // هر دیو با 150 میلی‌ثانیه فاصله ظاهر می‌شود
  });
});

// spider button par
sbtn.addEventListener("click",()=>{
    if(spiderdiv.classList.contains("hidden")){

         horrordiv.classList.remove("flex");
        horrordiv.classList.add("hidden");

        romantictiv.classList.remove("flex");
        romantictiv.classList.add("hidden");

        spiderdiv.classList.remove("hidden");
        spiderdiv.classList.add("flex")

        comedydiv.classList.remove("flex");
        comedydiv.classList.add("hidden");

        input.value = "spider-man";
    }
     movies.forEach((box, index) => {
    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-y-8");
      box.classList.add("opacity-100", "translate-y-0","transition-All","duration-500");
    }, index * 500); // هر دیو با 150 میلی‌ثانیه فاصله ظاهر می‌شود
  });
});

// comedy button part
cbtn.addEventListener("click",()=>{
    if(comedydiv.classList.contains("hidden")){

         horrordiv.classList.remove("flex");
        horrordiv.classList.add("hidden");

        romantictiv.classList.remove("flex");
        romantictiv.classList.add("hidden");

        spiderdiv.classList.remove("flex");
        spiderdiv.classList.add("hidden");

        comedydiv.classList.remove("hidden");
        comedydiv.classList.add("flex");

        input.value = "comedy";
    }
});



btn.addEventListener("click", () => {
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-y-8");
      box.classList.add("opacity-100", "translate-y-0");
    }, index * 150); // هر دیو با 150 میلی‌ثانیه فاصله ظاهر می‌شود
  });
});



// input part

searchbtn.addEventListener("click", () => {
    const value = input.value.toLowerCase().trim();

    // category ها visible
    catagory.forEach(cat => {
        cat.style.display = "flex";
    });

    // همه فیلم‌ها مخفی
    movies.forEach(movie => {
        movie.style.display = "none";
    });

    if (value === "") return;

    movies.forEach(movie => {
        const title = movie.querySelector("h1").innerText.toLowerCase();

        if (title.includes(value)) {
            movie.style.display = "inline-block";
        }
    });

   
});
