



function earth(){

  let water = true;
  let gravity = 10;

  return function (value){

    water = value;
  }


}


const ufo = earth();


ufo(false)


// o_k 개념은 이해 했습니다. 근데, 어디다 써요 ?




const button = document.querySelector('.btn');

// IIFE


const handleClick = (() => {
  let isClicked = false;

  return () => {
    if(!isClicked){
      document.body.style.background = 'orange';

    }else{
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  }
  
})()


// button.addEventListener('click',handleClick);

// document.querySelector('.first').addEventListener('click',() => {
//   console.log('hit');
  
//   button.removeEventListener('click',handleClick);
// })




function bindEvent(node,eventType,fn){

  if(typeof node === 'string') node = document.querySelector(node);
  
  node.addEventListener(eventType,fn);

  return () => node.removeEventListener(eventType,fn);
}

const remove = bindEvent('.btn','click',handleClick);


remove();






function useState(init){
  let value = init;

  function read(){
    // render()
    return value;
  }

  function write(newValue){
    // render()
    value = newValue;
  }

  return [read,write];

}



const [value,setValue] = useState('hello');


// read()
// write()