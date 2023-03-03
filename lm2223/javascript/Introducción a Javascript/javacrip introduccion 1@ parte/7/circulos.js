function ocultar(){
    document.getElementById('circulorojo').style.display = 'none';
    }
    function ocultar1(){
        document.getElementById('circuloverde').style.display = 'none';
        }
        function ocultar2(){
            document.getElementById('circuloazul').style.display = 'none';
            }
            function ocultartodo(){
                document.getElementById('caja').style.display = 'none';
                }
                function aparecen(){
                    document.getElementById('caja').style.display = 'block';
                    }
                
                    var clic = 1;

                    function logico(){ 
                    
                       if(clic==1){
                    
                       document.getElementById("caja").style.display = "none";
                    
                       clic = clic + 1;
                    
                       } else{
                    
                           document.getElementById("caja").style.display = "block";      
                    
                        clic = 1;
                    
                       }   
                    
                    }
                   
                    