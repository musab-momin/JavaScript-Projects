const frm = document.querySelector('.frm');
const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let nameWarning = document.querySelectorAll('.name-warning');
let emailWarning = document.querySelector('.email-warning');
let passwordWarning = document.querySelectorAll('.password-warning');
let thirdRow = document.getElementById('third-row');
let toggleBtn = document.querySelector('.link');
let poster = document.querySelector('.poster');
let container = document.querySelector('.container');

const nameValidator = (name)=>
{
    if(name.trim().length === 0 || symbols.test(name) ){
        for( let label of nameWarning ){
            label.innerHTML = 'spaces and special symbols are not allowed';
            label.style.display = 'block'
        }
        return false
    }else if( name.trim().length < 3 || symbols.test(name) ){
        for( let label of nameWarning ){
            label.innerHTML = 'name is to short';
            label.style.display = 'block'
        }
        return false
    }else{
        for( let label of nameWarning ){ label.style.display = 'none' }
        return true;
    }


}

const emailValidator = (email)=>
{
    if(email.match(validEmail)){
        emailWarning.style.display = 'none'
        return true
    }else{
        emailWarning.style.display = 'block'
        return false
    }

}

const passwordValidator = (password)=>
{

    if(password.trim().length < 9 || !symbols.test(password) || !/\d/.test(password) || password.toLowerCase() === password)
    {
        for(let warning of passwordWarning){
            warning.style.display = 'block'
        }
        thirdRow.classList.add('increase');
        return false
    }
    else
    {
        for(let warning of passwordWarning){
            warning.style.display = 'none'
        }

        thirdRow.classList.remove('increase');
        return true
    }
}

const formValidator = ()=>
{

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let  flag = nameValidator(firstName);
    flag = flag ? nameValidator(lastName) : false;
    flag = flag ? emailValidator(email) : false;
    flag = flag ? passwordValidator(password) : false;


    return flag;
}


const doPost = async (frmData)=>
{
    const call = await fetch('handleRegistration', {
        method: 'post',
        body: frmData
    })
    const response = await call.json();
    return response;
}

frm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    if(formValidator())
    {
        const frmData = new FormData(frm);

        const serverResponse = doPost(frmData);
        serverResponse.then(data=> {
            for(let key in data)    console.log(key , ':' , data[key])
        } )
    }

})


toggleBtn.addEventListener('click', () => 
{
    poster.classList.add("flip");
    container.classList.add("flip");
})