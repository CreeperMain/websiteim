//kratko objasnuvanje oti ova e naj komp del
const observer = new IntersectionObserver((entries) => {
  //vtoro prajme intersectionobs so koj nabljuduvame za promeni, kaj pojkje predmeti
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pokazhi");
    }
    //treto mu davame if statment vo koj toj kje ja dodeluvat klasata "pokazhi", koj gi pravit el. vidlivi
    else {
      entry.target.classList.remove("pokazhi");
      //isto taka se trgat klasta za animacijata pojkje pati da se izveduva
    }
    consle.log(entry);
  });
});
const hiddenEls = document.querySelectorAll(".skri");
// prvo gi selektirame site el. so klasa "skri"
hiddenEls.forEach((el) => observer.observe(el));
