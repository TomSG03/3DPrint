/// <reference path="E:\0 Web Programming\Сайт\tom44\HTML\typings\globals\jquery\index.d.ts" />

let prinebl = [
    [0,  'Шапка',                    'pic/figure.jpg'],
    [1,  'Шапка',                    'pic/Шапка.jpg'],
    [2,  'Варежка',                  'pic/Варежка.jpg'],
    [3,  'Валенок',                  'pic/Boots.jpg'],
    [4,  'Снежинка ажур (7 - 10)',   'pic/Снежинка_ажур.jpg'],
    [5,  'Звезда для снежинки',      'pic/Звезда.jpg'],
    [6,  'Новогодний шар',           'pic/Christmas_tree_ball.jpg'],
    [7,  'Игрушка на ёлку',          'pic/Yo_igr_Marina.jpg'],
    [8,  'Игр. на ёлку (Сосулька)',  'pic/Сосулька.jpg'],
    [9,  'Елка',                     'pic/Christmas_tree.jpg'],
    [10, 'Конфета-Трость',           'pic/Candy.jpg'],
    [11, 'Домик',                    'pic/Домик.jpg'],
    [12, 'Фонарь',                   'pic/Фонарь.jpg'],
    [13, 'Корона',                   'pic/Crown_queen_woman.jpg'],
    [14, 'Снеговик',                 'pic/Snowman.jpg'],
    [15, 'Колокольчик',              'pic/Bell.jpg'],
    [16, 'Шпиль',                    'pic/Шпиль.jpg'],
    [17, 'Шарик надувной',           'pic/Balloon.jpg'],
    [18, 'Пряня',                    'pic/Gingerman.jpg'],
    [19, 'Олень',                    'pic/Deer.jpg'],
    [20, 'Оленёнок',                 'pic/Олененок.jpg'],
    [21, 'Мышь',                     'pic/figure.jpg'],
    [22, 'Зайчик',                   'pic/Bunny_run.jpg'],
    [23, 'Рог единорога',            'pic/Unicorn_corn13.jpg'],
    [24, 'Мишуткино сердечко',       'pic/figure.jpg'],
    [25, 'Бабочка',                  'pic/Butterfly_Luda.jpg'],
    [26, 'Танк',                     'pic/tank2.jpg'],
    [27, 'Самолет',                  'pic/airplane.jpg'],
    [28, 'ХВ',                       'pic/figure.jpg'],
    [29, 'Лилия',                    'pic/Lily.jpg'],
    [30, 'Лист клена',               'pic/Клен.jpg'],
    [31, 'Лист дуба',                'pic/Дуб.jpg'],
    [32, 'Тюьпан',                   'pic/Tulip.jpg'],
    [33, 'Ромашка',                  'pic/Roma.jpg'],
    [34, 'Тюьпан Инна 1',            'pic/Tulip_Inna1.jpg'],
    [35, 'Тюьпан Инна 2',            'pic/Tulip_Inna2.jpg'],
    [36, 'Кексик',                   'pic/Кексик.jpg'],
    [37, 'Мороженка',                'pic/Мороженка.jpg'],
    [38, 'Сднем рождения',           'pic/figure.jpg'],
    [39, 'С новым годом',            'pic/figure.jpg'],
    [40, 'Вырубка для штампа',       'pic/figure.jpg'],
    [41, 'Цифра 1',                  'pic/num_1.jpg'],
    [42, 'Цифра 2',                  'pic/num_2.jpg'],
    [43, 'Цифра 3',                  'pic/num_3.jpg'],
    [44, 'Цифра 4',                  'pic/num_4.jpg'],
    [45, 'Цифра 5',                  'pic/num_5.jpg'],
    [46, 'Цифра 7',                  'pic/num_7.jpg'],
    [47, 'Цифра 8',                  'pic/num_8.jpg'],
    [48, 'Цифра 9',                  'pic/num_9.jpg'],
    [49, 'Цифра 0',                  'pic/num_0.jpg'],
    [50, 'Снежинка',                 'pic/Snowflake.jpg'],
    [51, 'X',                        'pic/X.jpg'],
    [52, 'B',                        'pic/B.jpg'],
    [53, 'Яйцо',                     'pic/Яйцо.jpg'],
    [54, 'Звезда',                   'pic/Звезда_23.jpg'],
    [55, 'Медаль',                   'pic/Медаль.jpg'],
    [56, 'Цифра 2',                  'pic/2_23.jpg'],
    [57, 'Цифра 3',                  'pic/3_23.jpg'],
    [58, 'Коньяк',                   'pic/Бутылка.jpg'],
    [59, 'Молоток',                  'pic/молоток.jpg'],
    [60, 'Ножовка',                  'pic/Ножовка.jpg'],
    [61, 'Разводной ключ',           'pic/Разводной_ключ.jpg'],
    [62, 'Голова зайца',             'pic/bunny_head.jpg'],
    [63, 'Уши зайца',                'pic/Bunny_ear.jpg'],
    [64, 'ХВ',                       'pic/XB.jpg'],
    [65, '1',                        'pic/M1.jpg'],
    [66, '2',                        'pic/M2.jpg'],
    [67, '3',                        'pic/M3.jpg'],
    [68, '4',                        'pic/M4.jpg'],
    [69, '5',                        'pic/M5.jpg'],
    [70, '6',                        'pic/M6.jpg'],
    [71, '7',                        'pic/M7.jpg'],
    [72, '8',                        'pic/M8.jpg'],
    [73, '0',                        'pic/M0.jpg'],
    [74, 'Карандаш',                 'pic/Pencil.jpg'],
    [75, 'Львёнок',                  'pic/Lion.jpg'],
    [76, 'Пряня-привет',             'pic/СookieMan2.jpg'],
];    


let catalog = [
    [['Новый год','Праздник'],  [1, 2, 3, 4, 50, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 76 ]],
    [['Цифры',''],              [41, 42, 43, 44, 45, 46, 47, 48, 49, 65, 66, 67, 68, 69, 70, 71, 72, 73]],
    [['Растения',''],           [29, 30, 31, 32, 33, 34, 35]],
    [['Еда',''],                [10, 36, 37]],
    [['Зверушки',''],           [25, 19, 20, 22, 62, 63, 75]],
    [['23 февраля',''],         [18, 26, 27, 54, 55, 56, 57, 58, 59, 60]],
    [['Пасха',''],              [51, 52, 53, 64]],
    [['Предметы',''],           [74]],
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

