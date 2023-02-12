let textes =  document.getElementsByClassName("secondSB")[0]
let postes = document.getElementById("posttext")

    document.getElementById("poss").addEventListener("click", () => {
     document.getElementsByClassName("modal")[0].style.display = "block"
    }) 

     document.getElementById("pott").addEventListener("click", () => {
        document.getElementsByClassName("modal")[0].style.display = "none"
        postes.value = ""
        })   

     document.getElementById("post").addEventListener("click", () => {
      postes.value = textes.textContent
      document.getElementsByClassName("modal")[0].style.display = "none"
      document.getElementById("posttext").value = ""
     })