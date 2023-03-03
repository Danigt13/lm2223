let mensajes=["frase 1","frase 2","frase 3","frase 4","frase 5","frase 6","frase 7","frase 8","frase 9"]
imprimemensajes();

function imprimemensajes(){
for(var i=mensajes.length-1;i>=0;i=i -1)

document.write("<div class='rectangulo'><img width='32' src='twitter.png'>"+mensajes[i]+"<img  width='32' src='basura.png'>"+"<br>"+"</div>")

}


