$('.aboutPage__poup').hide(0)
let isOpenPoup__about=1
$('.aboutPage__main__right__btn').click(function(){
    if(isOpenPoup__about==1){
    setTimeout(function(){
   
            isOpenPoup__about=0
            $('.aboutPage__poup').show(250)
            $('.aboutPage').css('filter','blur(5px)')
  
   
    },100)
}
})
$('.aboutPage__poup__close').click(function(){
    if(isOpenPoup__about==0){
        isOpenPoup__about=1
        $('.aboutPage__poup').hide(250)
        $('.aboutPage').css('filter','blur(0px)')
    }
})
$('.aboutPage').click(function(){
    if(isOpenPoup__about==0){
        isOpenPoup__about=1
        $('.aboutPage__poup').hide(250)
        $('.aboutPage').css('filter','blur(0px)')
    }

})
let clipboard = new ClipboardJS('.btn__clipboard');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
tippy('#btn__clipboard', {
    placement: 'bottom',
    trigger: 'click',
  content: "Скопійовано",
 
});
// tippy('#btn__clipboard1', {
//     placement: 'bottom',
//   content: "Скопіювати номер",
 
// });