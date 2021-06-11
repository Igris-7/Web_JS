var btnMenu=document.querySelector('.btn-menu');
//var btnMenu=document.getElementsByClassName('btn-menu');
var menu=document.querySelector('.list-container');
var containerMenu=document.querySelector('.menu');
var activador=true;

btnMenu.addEventListener('click',() => { 
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador)
    {
        menu.style.left='0';
        menu.style.transition='0.5s';

        activador=false;

    }
    else{
        menu.style.left='-100%';
        menu.style.transition='0.5s';
        activador=true;
    }
} );



var enlaces=document.querySelectorAll('.lists li , .lists a');

/*intercalar clase active */
enlaces.forEach(element => {
    element.addEventListener('click',(event)=>
    {
            enlaces.forEach(link =>
                {
                    link.classList.remove('active');
                })
            event.target.classList.add('active');
    })
});

//Efecto de Scroll

var prevScrollPost=window.pageYOffset; //acceder a la ventana y devuelva el valor en px
var gotop=document.querySelector('.go-top')

//cuando se desplaza la barra
window.onscroll = ()=>
{
    var currenScrollPos=window.pageYOffset;   //valor de la ventana al hacer scroll
     //mostrar y ocultar menu
     if(prevScrollPost>currenScrollPos)
     {
        containerMenu.style.top='0';
        containerMenu.style.transition='0.5s';
     }
     else{
        containerMenu.style.top='-60px';
        containerMenu.style.transition='0.5s';
     }
     prevScrollPost=currenScrollPos;//para que se vuelva a mostrar el menu

     //Mostrar y ocultar scroll estilos

        /*var arriba= window.pageYOffset;
        if(arriba <= 600)
        {
        containerMenu.style.borderBottom='none';

        gotop.style.right='-100%';
        }
        else{
            containerMenu.style.borderBottom='3px solid #ff2e63';
            gotop.style.right='0';
            gotop.style.transition='0.5s';
        }
        */
}


gotop.addEventListener('click',()=>
{
    document.body.scrollTop=0; /*Safari*/
    document.documentElement.scrollTop=0;

});

var verAbajo=document.getElementById('abajo');
verAbajo.addEventListener('click',()=>
{
    document.body.scrollTop=600;
    document.documentElement.scrollTop=600;
});