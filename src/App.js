import logo from './logo.svg';
import './App.css';
import "./style.scss"

var spaces;
var bs;
var bSize = 20;
function Minesweeper(){
  var bs = Array(bSize * bSize).fill(0);

  for(var i = 0; i < bs.length; i++){
    bs[i] = Math.random() * (bSize * bSize);
  }

  var mineCount = 30;

  var mines = Array(mineCount).fill([0, 0]);
  for(var i = 0; i <mines.length; i++){
    mines[i] = [Math.floor(Math.random() * bSize), Math.floor(Math.random() * bSize)];
  }

  var noDuplicates = true;
  var c = 0;
  
  //console.debug(mines.length);
  
  var minesS = new Array(mines.length);

  for(var i = 0; i < mines.length; i++){
    minesS[i] = (String)(mines[i][0]) + (String)(mines[i][1]);
  }
  console.debug(minesS);
  do{
    for(var i = 0; i < mines.length; i++){
      var temp = Array.from(minesS);
      temp[i] = "-1";
      if(temp.includes(minesS[i])){
        console.debug(minesS[i]);
        mines[i] = [Math.floor(Math.random() * bSize), Math.floor(Math.random() * bSize)];
        minesS[i] = (String)(mines[i][0]) + (String)(mines[i][1]);
        noDuplicates = false;
        
        c++;
      }
      //console.debug(temp.includes(mines[i]));
      console.debug(temp);
    }

    //console.debug("r");
    
    console.debug(c);
  }while((!noDuplicates) && c < 100);
  

  //console.debug(mines.length);

  

  spaces = Array(bSize).fill(0);
  
  for(var i = 0; i < spaces.length; i++){
    spaces[i] = Array(bSize).fill(0);
  }
  
  //on first pass of the mines populate the board with the number of neaby mines
  //second pass will place the mines so they don't get overwritten in the first pass
  for(var i = 0; i < mines.length; i++){
    console.debug(mines[i]);
    
    //fill in the spaces in the row above
    if(mines[i][0] > 0){
      if(mines[i][1] > 0){
        spaces[mines[i][0] - 1][mines[i][1] - 1] += 1;
      }
      
      spaces[mines[i][0] - 1][mines[i][1]] += 1;

      if(mines[i][1] < bSize - 1){
        spaces[mines[i][0] - 1][mines[i][1] + 1] += 1;
      }
    }

    //fill in the spaces in the same row as the mine
    if(mines[i][1] > 0){
      spaces[mines[i][0]][mines[i][1] - 1] += 1;
    }

    if(mines[i][1] < bSize - 1){
      spaces[mines[i][0]][mines[i][1] + 1] += 1;
    }
    
    //fill in the information in the spaces in the row below
    if(mines[i][0] < bSize - 1){
      if(mines[i][1] > 0){
        spaces[mines[i][0] + 1][mines[i][1] - 1] += 1;
      }
      
      spaces[mines[i][0] + 1][mines[i][1]] += 1;

      if(mines[i][1] < bSize - 1){
        spaces[mines[i][0] + 1][mines[i][1] + 1] += 1;
      }
    }
  }

  
  for(var i = 0; i < mines.length; i++){
    //add the mine to the respective space
    spaces[mines[i][0]][mines[i][1]] = -1;
  }

  for(var i = 0; i < spaces.length; i++){
    console.debug(spaces[i]);
  }
  
  //alert("running");
  
  return(
    <div className="Mine">
      <div className="buttonGrid">
        {bs.map((element, index) => makeSpace(index))}
      </div>
    </div>
  );
}

function clicked(event, index){
  
}

function makeSpace(ind){
  //console.debug(ind);
  function baseClick(event, index){
    clicked(event, index)
    if(spaces[Math.floor(index / bSize)][index % bSize] == -1){
      event.target.className = "badButton";
    }
    else if(spaces[Math.floor(index / bSize)][index % bSize]  >= 1){
      event.target.className = "goodButton";
      event.target.innerText = (String)(spaces[Math.floor(index / bSize)][index % bSize]);
    }
    else{
      event.target.className = "s";
    }
    

  }
  return(
    <div key={"d"+ind} className="bGridItem">
      <button key={ind} onClick={(e) => baseClick(e, ind)} className="s">
      </button>
    </div>  
  );
}




export default Minesweeper;
