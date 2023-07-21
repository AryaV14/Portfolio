function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// function message(){
//     var Name = document.getElementById('name');
//     var Email = document.getElementById('email');
//     var Msg = document.getElementById('message');
//     const success = document.getElementById('success');
//     const danger = document.getElementById('danger');

//     if(Name.value === '' || Email.value === '' || Msg.value === '')
//     {
//         danger.style.display = 'block';
//     }
//     else{

//         success.style.display = 'block';
//     }

// }