console.log('jQuey ==', $);

$(document).ready(() => {
    $('.block').css('width', 50)
    $('.block').css('height', 50)
    $('.block').css('height', 50)
    console.log('Page is loaded');
    $('#main').css('color', 'green');
    $('.text_block').css('color', 'red').text('Hello from ')
    // $('.text_block').text('Hello from <p></p>');
    $('.text_block').addClass('added_class')
    $('.text_block').after('<h2>This is heading h2</h2>');

    console.dir($('input[type="text"]'))
})