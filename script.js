//adding score
  
  let score =JSON.parse(localStorage.getItem('score'))||{
          win:0,
          losses:0,
          ties:0
  } ;
  
  // we can do it on other way. So I disable if statement
  /* 
  if(score===null){
    score ={
      win:0,
      losses:0,
      ties:0
    }
  }
  */

   
   // updating score
  

  function playGame(playerMove){
     const comResult = pickComputerMove();
  
  let result = '';
  
  if(playerMove==='rock'){

     if (comResult==='rock'){
  result = '<h2>Tie.🙂</h2>';
  } else if (comResult==='paper'){
  result ='<h2>You lose.😭</h2>';
  } else if (comResult==='scissor'){
  result= '<h2>You Won.😃</h2>';
  }
  }else if(playerMove==='paper'){
     if (comResult==='rock'){
  result = '<h2>You Won.😃</h2>';
  } else if (comResult==='paper'){
  result ='<h2>Tie.🙂</h2>';
  } else if (comResult==='scissor'){
  result= '<h2>You lose.😭</h2>';
  }
  }else if(playerMove==='scissor'){
       if (comResult==='rock'){
  result = '<h2>You lose.😭</h2>';
  } else if (comResult==='paper'){
  result ='<h2>You Won.😃</h2>';
  } else if (comResult==='scissor'){
  result= '<h2>Tie.🙂</h2>';
  }
 }
    
  // adding scores
  if(result==='<h2>You Won.😃</h2>'){
    score.win +=1;
  }else if(result==='<h2>You lose.😭</h2>'){
    score.losses +=1;
  }else if(result==='<h2>Tie.🙂</h2>'){
    score.ties +=1;
  }
  //Display result
   document.querySelector('.js-result').innerHTML= result;
 
  //updating score
      updateScore();
  
      localStorage.setItem('score', JSON.stringify(score));
  
   //display move 
   
      document.querySelector('.js-move').innerHTML= 'You pick' + '<img src="./images/'+playerMove+'.png" class="move-icon" alt="" />' + 'Computer Pick' + '<img src="./images/'+comResult+'.png" class="move-icon" alt="" />';
   
   
   console.log(playerMove);
   console.log(comResult);
  }


// updating score
   function updateScore(){
       document.querySelector('.scoreCard').innerHTML= "Win  " + score.win+', Losses '+ score.losses+',Ties '+score.ties+"." ;
   }
   
   
   // taking computer move
  function pickComputerMove(){
  const randomNumber= Math.random();
  let comResult = '';
  
  if(randomNumber >=0 && randomNumber< 1/3){
    comResult = "rock";
  }
  else if(randomNumber >= 1/3 && randomNumber<2/3){
    comResult="paper";
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    comResult="scissor";
  }
return comResult;
  }


  //display move
   //    document.querySelector('.js-move').innerHTML= You pick + '<img src="./images/rock.png" class="move-icon" alt="" />'; + Computer Pick + '<img src="./images/scissor.png" class="move-icon" alt="" />'
