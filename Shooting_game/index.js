let turn, playerOne, playerTwo, round, game, playerOneHealth, playerTwoHealth, flag;

let playerOneAvatar = document.querySelector('.player-one');
let playerOneBullet = document.querySelector('.player-one-bullet');
let playerOneImg = document.getElementById('player-one-img');


let playerTwoBullet = document.querySelector('.player-two-bullet');
let playerTwoAvatar = document.querySelector('.player-two');
let playerTwoImg = document.getElementById('player-two-img');

const startGame = ()=>
{
    actions()
   
}



const actions = ()=>
{
    document.addEventListener('keyup', (key)=>
    {
        if(key.code === 'Space')
        {
            playerOneAvatar.style.animation = 'jump .5s ease';
            setTimeout(()=>
            {
                clearAnimation(playerOneAvatar);
            }, 500)
        }
        if(key.code === 'KeyS')
        {
            playerOneBullet.style.animation = 'player-one-fire .5s ease';
            setTimeout(()=>
            {
                clearAnimation(playerOneBullet);
                //checking does bullet hit the player or not
                flag =  overlaps(playerTwoAvatar, playerOneBullet);
            }, 500)
        }

        if(key.code === 'Numpad0')
        {
            playerTwoAvatar.style.animation = 'jump .5s ease';
            setTimeout(()=>
            {
                clearAnimation(playerTwoAvatar);
            }, 500)
        }
        if(key.code === 'Numpad2')
        {
            playerTwoBullet.style.animation = 'player-two-fire .5s ease';
            setTimeout(()=>
            {
                clearAnimation(playerTwoBullet);
            }, 500)
        }


    })
}

function overlaps(a, b) {
    const rect1 = a.getBoundingClientRect();
    const rect2 = b.getBoundingClientRect();
    const isInHoriztonalBounds =
      rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds =
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
  }


const clearAnimation = (player)=>{
    player.style.animation = '';
}


startGame();
