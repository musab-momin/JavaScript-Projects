let isEditing = false, editeId = '';



const todo_container = document.querySelector('.todo');
const clear_btn = document.querySelector('.btn-container');
const form = document.querySelector('.frm');
const input = document.getElementById('title');
const toast = document.querySelector('.toast');
const toast_mssg = document.getElementById('toast-mssg');




//functions
const handleSubmit = (e)=>
{
    e.preventDefault();
    createList();
}


const createList = ()=>{
    const item = input.value;
    if(item && !isEditing)
    {
        const id = new Date().getTime().toString();
        const article = document.createElement('article');
        article.classList.add('grocery-items')
        const attr = document.createAttribute('item-id');
        attr.value = id;
        article.setAttributeNode(attr);
        article.innerHTML = `<h4>${item}</h4>
        <div>
            <button class='func-btn update-btn' >Edit</button>
            <button class='func-btn del-btn' )>Del</button>
        </div>`
        todo_container.appendChild(article);

        const del_btn = document.querySelectorAll('.del-btn')
        const update_btn = document.querySelectorAll('.update-btn');

        del_btn.forEach((item)=>{item.addEventListener('click', deleteSingleItem)})
        update_btn.forEach((item)=>{item.addEventListener('click', updateItem);})

        clear_btn.classList.add('show');
        invokeToast('item added', 'success');
        addItemToStorage(id, item);
        backToNormal();
        
    }else if(item && isEditing)
    {
      let arr = Array.from(todo_container.children);
      arr.forEach((item)=>{
          let ele = item;
          if(ele.getAttribute('item-id')===editeId)
          {
            ele.firstChild.innerHTML = input.value;
          }
      })
      let item = input.value;
      updateStorageItem(editeId, item);
      invokeToast('item updated ', 'success');
      backToNormal();
        
    }else{
        invokeToast('please enter value', 'danger');
    }
}

const createListItem = ()=>
{
    let slate = setToStorage();
    if(slate.length > 0)
    {
        slate.map((singleItem)=>
        {
            const article = document.createElement('article');
            const attr = document.createAttribute('item-id');
            attr.value = singleItem.id;
            article.setAttributeNode(attr);
            article.innerHTML = `<h4>${singleItem.item}</h4>
            <div>
                <button class='func-btn update-btn' >Edit</button>
                <button class='func-btn del-btn' )>Del</button>
            </div>`
            todo_container.appendChild(article);
            const del_btn = document.querySelectorAll('.del-btn')
            const update_btn = document.querySelectorAll('.update-btn');

            del_btn.forEach((item)=>{item.addEventListener('click', deleteSingleItem)})
            update_btn.forEach((item)=>{item.addEventListener('click', updateItem);})
        })
        clear_btn.classList.add('show');
    }
}

const doClear = ()=>
{
    const item_list = document.querySelectorAll('.grocery-items');
    item_list.forEach((item)=>{
        todo_container.removeChild(item);
    })
    clear_btn.classList.remove('show');
    invokeToast('list is cleared', 'danger');
    clearStorageItems()
}

const deleteSingleItem = (e)=>
{
    const element =  e.currentTarget.parentElement.parentElement;
    todo_container.removeChild(element);
    deleteStorageItem(element.getAttribute('item-id'));

    if(todo_container.children.length === 0){clear_btn.classList.remove('show');}
    invokeToast('item is removed', 'danger');
}

const updateItem = (e)=>
{
    editeId = e.currentTarget.parentElement.parentElement.getAttribute('item-id');
    isEditing = true;
    input.value = e.currentTarget.parentElement.parentElement.firstChild.textContent;
}

const invokeToast = (mssg, cls)=>
{
    toast.classList.add(cls)
    toast_mssg.textContent = mssg;
    setTimeout(()=>{
        toast.classList.remove(cls)
        toast_mssg.textContent = '';
    }, 1000)
}



const backToNormal = ()=>{
    isEditing = false;
    editeId = ''
    input.value = ''
}


//event listener's
form.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', createListItem)



//local Storage
const addItemToStorage = (id, item)=>{
    const grocery = {id, item}
    let staples = setToStorage();
    staples.push(grocery);
    localStorage.setItem('list', JSON.stringify(staples));
}

const clearStorageItems = ()=>{
    localStorage.removeItem('list');
}

const deleteStorageItem = (id)=>
{
    let staples = setToStorage();
    staples = staples.filter(item=>item.id !== id);
    localStorage.setItem('list', JSON.stringify(staples));
}

const updateStorageItem = (id, item)=>
{
    let staples = setToStorage();
    staples = staples.map((singleItem)=>
    {
        if(singleItem.id === id)
        {
            singleItem.item = item;
        }
        return singleItem;
    })
   localStorage.setItem('list', JSON.stringify(staples));
}


const setToStorage = ()=>{
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}