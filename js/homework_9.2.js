// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
// сделать с помощью jQuery
$( document ).ready(function() {

    let $div_1 = $('<div>');
    let $div_2 = $('<div>');

    $('body').append($div_1);
    $('body').append($div_2);
    
    $div_1.css({
        'width':'500px',
        'height':'250px',
        'margin':'10px',
        'background':'blue',
    });

    $div_2.css({
        'width':'400px',
        'height':'200px',
        'margin':'10px',
        'background':'red',
    });

    $div_1.mouseover( function() {
		console.log($div_1.css(['width', 'height']));
	});
	$div_2.mouseover( function() {
		console.log($div_2.css(['width', 'height']));
	});
	$div_1.click( function() {
		alert('Синий!')
	});
	$div_2.click( function() {
		alert('Красный!')
	});


});