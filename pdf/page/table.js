import addTable from "../elements/addTable.js";

// const ROWS = [
//     {
//         header: true,
//         columns: [
//             {
//                 text: 'Запрос'
//             },
//             {
//                 text: '1 марта'
//             },
//             {
//                 text: '31 марта'
//             }
//         ]
//     },
//     {
//         header: false,
//         columns: [
//             {
//                 text: 'aso продвижение'
//             },
//             {
//                 text: '9'
//             },
//             {
//                 text: '3'
//             }
//         ]
//     },
//     {
//         header: false,
//         columns: [
//             {
//                 text: 'aso app store optimization'
//             },
//             {
//                 text: '5'
//             },
//             {
//                 text: '2'
//             }
//         ]
//     },
//     {
//         header: false,
//         columns: [
//             {
//                 text: 'aso оптимизация мобильных приложений'
//             },
//             {
//                 text: '2'
//             },
//             {
//                 text: '1'
//             }
//         ]
//     }
// ]

const ROWS = [
    {
        header: true,
        columns: [
            {
                text: 'URL'
            },
            {
                text: 'Ссылки на URL'
            },
            {
                text: 'DR'
            }, 
            {
                text: 'Ссылки на домен'
            },
            {
                text: 'Комментарий'
            }
        ]
    },
    {
        header: false,
        columns: [
            {
                text: 'htt://agvwdgavgwd.com/nyu2u-uydfg66fsferbgjxbd-aywdy2yw-3fbsgjwvv4sgj'
            },
            {
                text: '200'
            },
            {
                text: '43'
            }, 
            {
                text: '5000'
            },
            {
                text: 'Мощный конкурент, есть автоперевод на несколько языков, много форм оплаты'
            }
        ]
    },
    {
        header: false,
        columns: [
            {
                text: 'URL'
            },
            {
                text: 'Ссылки на URL'
            },
            {
                text: 'DR'
            }, 
            {
                text: 'Ссылки на домен'
            },
            {
                text: 'Комментарий'
            }
        ]
    },
    {
        header: false,
        columns: [
            {
                text: 'URL'
            },
            {
                text: 'Ссылки на URL'
            },
            {
                text: 'DR'
            }, 
            {
                text: 'Ссылки на домен'
            },
            {
                text: 'Комментарий'
            }
        ]
    }
]


function table() {
    addTable({x: 40, y: 40}, {rows: ROWS });
}

export default table;