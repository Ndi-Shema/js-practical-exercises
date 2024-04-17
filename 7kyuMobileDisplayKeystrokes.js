function mobileKeyboard(str){
    //have fun ^.^
    let strokes = 0;
    for(let i=0;i<str.length;i++){
      if(!isNaN(str[i]) || str[i]==="*" || str[i]==="#"){
        strokes+=1;
      }
      else{
        let position = str[i].charCodeAt(0)-96
        
        if(str[i]==="z"){
          strokes+=5;
          console.log(str[i], strokes)
        }
        else if(position<4){
          strokes+=position+1
          console.log(str[i], strokes)
        }
        else{
          strokes+=2+(position%4)
          console.log(str[i], strokes)
        }
      }
    }
    return strokes;
    
  }