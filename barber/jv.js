const txtAnim = document.querySelector(" div div h6") 

new Typewriter(txtAnim, {
deleteSpeed: 10,
loop: true
})
.changeDelay(40)
.typeString('Des produits de qualités')
.pauseFor(1000)
.deleteChars(50)
.typeString('Exceptionnel')
.pauseFor(1000)
.deleteChars(50)
.typeString('Barbe parfaitement taillé.')
.pauseFor(1000)
.deleteChars(50)
.typeString('Un travail exemplaire')
.pauseFor(1000)
.deleteChars(50)
.typeString('Une expérience plaisante')
.pauseFor(1000)
.deleteChars(50)
.start()
