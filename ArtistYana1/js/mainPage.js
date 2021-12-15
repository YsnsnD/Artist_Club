$( document ).ready(function(){
    /*При загрузке страницы прячем иконку 
    меню и выплывающее меню*/
    $('.list-hide').hide();
    $('#hide-div').hide();
    /*Так же привязываем иконке
    меню событие*/
    $('#menu_butt').click(function(){
        $('.list-hide').slideToggle(500)
    })
    // Проверка размера экрана при ЗАГРУЗКЕ страницы
    if($(window).width()<=680)
    {
        // Прячем навигацию с кнопкам
        // Показываем меню и иконку
        $('.list').hide();
        $('#Buttons-nav').hide();
        $('#hide-div').show();
        
    }    
    //Проверка размера экрана при ИЗМЕНЕНИИ РАЗМЕРА экрана
    $( window ).resize(function() {
        if($(window).width()<=680)
        {
            // Прячем навигацию с кнопкам
            // Показываем меню и иконку
            $('.list').hide();
            $('#Buttons-nav').hide();
            $('#hide-div').show();            
        }
        else{
            // Показываем навигацию с кнопкам
            // Прячем меню и иконку
            $('.list').show();
            $('#Buttons-nav').show();
            $('#hide-div').hide();
                      
        }
    })
});