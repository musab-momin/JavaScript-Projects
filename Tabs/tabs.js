let history, version, goal, content_div;


window.onload = ()=>{
    history = document.getElementById('history');
    version = document.getElementById('vesion');
    goal = document.getElementById( 'goal');
    content_div = document.querySelector('.content');
}


const toggler = (value)=>{
    if(value === 'history'){
        history.classList.add('active');
        version.classList.remove('active');
        goal.classList.remove('active');
    }else if(value === 'vision'){
        history.classList.remove('active');
        version.classList.add('active');
        goal.classList.remove('active');
    }else if(value === 'goal'){
        history.classList.remove('active');
        version.classList.remove('active');
        goal.classList.add('active');
    }
}

const createContent = (value)=>
{
    if(value === 'history')
    {
        let content = `<h4>History</h4>`
        content+=`<p>I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.</p>`
        content_div.innerHTML = content;
        toggler(value)
        
    }
    else if(value === 'vision')
    {
        let content = `<h4>Vision</h4>`
        content+=`<p>Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.</p> `
        content_div.innerHTML = content;
        toggler(value)
    }
    else if(value === 'goal')
    {
        let content = `<h4>Goals</h4>`
        content+=`<p>Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones. </p>`
        content_div.innerHTML = content;
        toggler(value)
    }

}