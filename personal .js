function showGallary(){
    var gallaryId=document.getElementById('gallary');
    var gallaryDisplay= gallaryId.style.display;
    if(gallaryDisplay=='none'){
        
        gallaryId.style.display='block';
    }
    else {
        gallaryId.style.display='none';
    }
    
}

function optionFunction(options) {
    
    var optionValue=options.value;
    
    if (optionValue=='option1'){
        
        document.getElementById('detail').style.display='block';
        document.getElementById('detail2').style.display='none';
        document.getElementById('detail3').style.display='none';
    }
    if (optionValue=='option2'){
        
        document.getElementById('detail2').style.display='block';
        document.getElementById('detail').style.display='none';
        document.getElementById('detail3').style.display='none';
    }
    if (optionValue=='option3'){
        
        document.getElementById('detail3').style.display='block';
        document.getElementById('detail').style.display='none';
        document.getElementById('detail2').style.display='none';
    }
}


window.onload=function(){
    
    const modeId=document.getElementById('switchMode');
    const classMode=document.querySelector('.light').classList;
    
    modeId.addEventListener('change' , function(){
        if(modeId.checked){
            
            
            classMode.remove("light");
            
           
        }
        else{
            classMode.add("light");
        }
        
    })
    
    
    
}








