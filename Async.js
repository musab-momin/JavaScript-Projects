
let stocks = {
    fruits: ["apple", "orange", "banana", "graps", "stawberry"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  

let isShopOpen = false;


let order = (work, time)=>{
    return(new Promise((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work());
            }, time)
        }else{
            reject( console.log('Our shop is closed') );
        }
    }))
}


order(() => console.log(`${stocks.fruits[0]} was selected`), 2000)
  .then(() => {
    return order(() => console.log("production was started "), 0000);
  })
  .then(() => {
    return order(
      () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added `),
      2000
    );
  })
  .then(() => {
    return order(() => console.log("Machine was started..."), 1000);
  })
  .then(() => {
    return order(
      () => console.log(`icecream placed on ${stocks.holder[1]}`),
      2000
    );
  })
  .then(() => {
    return order(
      () => console.log(`${stocks.toppings[0]} was selected `),
      3000
    );
  })
  .then(() => {
    return order(
      () => console.log("Here is your icecreame enjoy it!!!!"),
      2000
    );
  }).catch(()=>console.log('sorry for inconvinice ....'));
