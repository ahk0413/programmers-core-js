function earth(){
  let water = true;
  let gravity = 10;

  function tiger(value){
    water = value;
  }

  return tiger;
}

const ufo = earth();

ufo(false);


const button = document.querySelector('.btn');

//IIFE

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

button.addEventListener('click',handleClick);


function bindEvent(node,eventtype,fn){
  if(typeof node === 'string') node = document.querySelector(node);

  node.addEventListener(eventtype,fn);

  return () => node.removeEventListener(eventtype,fn);
}

const remove = bindEvent('.btn','click',handleClick);

remove();


function fn(init){
  let value = init;

  function read(){
    return value;
  }
  function write(newValue){
    value = newValue;
  }

  return [read, write];
}

const [value,setValue] = useState('hello');