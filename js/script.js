/// <reference path="E:\0 Web Programming\Сайт\tom44\HTML\typings\globals\jquery\index.d.ts" />

let prinebl = [
    [0,  'Шапка',                    'pic/figure.jpg'],
    [1,  'Шапка',                    'pic/figure.jpg'],
    [2,  'Варежка',                  'pic/figure.jpg'],
    [3,  'Валенок',                  'pic/figure.jpg'],
    [4,  'Снежинка ажур (7 - 10)',   'pic/figure.jpg'],
    [5,  'Звезда',                   'pic/figure.jpg'],
    [6,  'Новогодний шар',           'pic/figure.jpg'],
    [7,  'Игрушка на ёлку',          'pic/figure.jpg'],
    [8,  'Игр. на ёлку (Сосулька)',  'pic/figure.jpg'],
    [9,  'Елка',                     'pic/figure.jpg'],
    [10, 'Конфета-Трость',           'pic/figure.jpg'],
    [11, 'Домик',                    'pic/figure.jpg'],
    [12, 'Фонарь',                   'pic/figure.jpg'],
    [13, 'Корона',                   'pic/figure.jpg'],
    [14, 'Снеговик',                 'pic/figure.jpg'],
    [15, 'Колокольчик',              'pic/figure.jpg'],
    [16, 'Шпиль',                    'pic/figure.jpg'],
    [17, 'Шарик надувной',           'pic/figure.jpg'],
    [18, 'Человек',                  'pic/figure.jpg'],
    [19, 'Олень Рудольф',            'pic/figure.jpg'],
    [20, 'Оленёнок',                 'pic/figure.jpg'],
    [21, 'Мышь',                     'pic/figure.jpg'],
    [22, 'Зайчик',                   'pic/figure.jpg'],
    [23, 'Рог единорога',            'pic/figure.jpg'],
    [24, 'Мишуткино сердечко',       'pic/figure.jpg'],
    [25, 'Бабочка',                  'pic/figure.jpg'],
    [26, 'Танк',                     'pic/figure.jpg'],
    [27, 'Самолет',                  'pic/figure.jpg'],
    [28, 'ХВ',                       'pic/figure.jpg'],
    [29, 'Лилия',                    'pic/figure.jpg'],
    [30, 'Лист клена',               'pic/figure.jpg'],
    [31, 'Лист дуба',                'pic/figure.jpg'],
    [32, 'Тюьпан',                   'pic/figure.jpg'],
    [33, 'Ромашка',                  'pic/figure.jpg'],
    [34, 'Тюьпан Инна 1',            'pic/figure.jpg'],
    [35, 'Тюьпан Инна 2',            'pic/figure.jpg'],
    [36, 'Кексик',                   'pic/figure.jpg'],
    [37, 'Мороженка',                'pic/figure.jpg'],
    [38, 'Сднем рождения',           'pic/figure.jpg'],
    [39, 'С новым годом',            'pic/figure.jpg'],
    [40, 'Вырубка для штампа',       'pic/figure.jpg'],
    [41, 'Цифра 1',                  'pic/figure.jpg'],
    [42, 'Цифра 2',                  'pic/figure.jpg'],
    [43, 'Цифра 3',                  'pic/figure.jpg'],
    [44, 'Цифра 4',                  'pic/figure.jpg'],
    [45, 'Цифра 5',                  'pic/figure.jpg'],
    [46, 'Цифра 6',                  'pic/figure.jpg'],
    [47, 'Цифра 7',                  'pic/figure.jpg'],
    [48, 'Цифра 8',                  'pic/figure.jpg'],
    [49, 'Цифра 9',                  'pic/figure.jpg'],
    [50, 'Цифра 0',                  'pic/figure.jpg'],
];    


let catalog = [
    [['Новый год','Праздник'],  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],
    [['Цифры',''],              [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]],
    [['Растения',''],           [29, 30, 31, 32, 33, 34, 35]],
    [['Еда',''],                [10, 36, 37]],
    [['Зверушки',''],           [25, 24, 21, 22, 20]],
    [['23 февраля',''],         [18, 26, 27]]
];


let new_category = document.body.getElementsByClassName('main');

let innerHtml = "";

for (var k = 0; k <= (catalog.length - 1); k++) {
    
    innerHtml += '<article class="post">' + '<div class="post-frame">' + '<ul class="category-list">';
    
    for (var n = 0; n <= (catalog[k][0].length - 1); n++) {
        
        if (catalog[k][0][n] != '') {
            console.log(catalog[k][n]);
            innerHtml += '<li class="category-list-item">' + ' <a class="category-link" href="#0">' + catalog[k][0][n] + '</a></li>';
        };
    }    
    innerHtml +=  '</ul> </div> <div class="post_catalog_from_tag">';

    for (var j = 0; j <= (catalog[k][1].length - 1); j++) {

        /* Без увеличения */
        /*innerHtml += '<div class="catalog-item"> <div> <img src=' + prinebl[catalog[k][1][j]][2] + ' class="post-size-picture"' + ' alt="3D модель"> </div>';*/
        
        str = 'simplebox_group';/* группировка */
    
        innerHtml += '<div class="catalog-item"> <div>' + '<a rel='+ str + ' href=' + prinebl[catalog[k][1][j]][2] + '><img src=' + prinebl[catalog[k][1][j]][2] + ' class="post-size-picture" alt=' + prinebl[catalog[k][1][j]][1] + '> </a> </div>';
        innerHtml += '<div class="catalog-item-title"><h3 class="frame-title">' + prinebl[catalog[k][1][j]][1] + '</h3> </div> </div>'

    }

    innerHtml += '</article>';


    
}

new_category[0].innerHTML = innerHtml;

