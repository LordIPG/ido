function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")


  if (html.classList.contains("light"))
  {

  // alterar  imagem // 
  
  img.setAttribute("src","./assets/Logo-light.png")

  }

  else{
img.setAttribute("src","./assets/Logo-black.jpg")

  }

}