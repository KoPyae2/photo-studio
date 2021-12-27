$(document).ready(function(){
//Start Navbar

//For Navbutton
$('.navbuttons').click(function(){
    $('.navbuttons').toggleClass('changes');
});

//For Navbar
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }

});

//End Navbar


//Start Mission Section
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
});

//End Mission Section

// Start Gallary Section

$('.gallerylists').click(function(){
    // console.log('hay');
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);
    if(datafilter === "all"){
        $('.filters').show(600);
    }else{
        $('.filters').not('.'+datafilter).hide(600);

        $('.filters').filter('.'+datafilter).show(600);
    }
});

//For ul active

$('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
})





// End Gallary Section

//Start Pricing Section

$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 4300){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');
    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }

});
//End Pricing Section


//Start Footer Section
const showyer = document.getElementById('showyear');
const getfullyear = new Date().getFullYear();

showyer.innerText = getfullyear;
//End Footer Section

});