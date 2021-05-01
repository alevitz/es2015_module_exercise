function choice(items){
  return Math.floor(Math.random() * items.length);
}


function remove(items, item){
  let itemIndex = items.indexOf(item);

  if(!itemIndex)return undefined;

  let fruit = items[itemIndex];

  items.splice(itemIndex);

  return fruit;
}

export {choice, remove};