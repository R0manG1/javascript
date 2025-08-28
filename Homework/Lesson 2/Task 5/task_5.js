//#coYydZuaeEB – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temperature = [
    {
        day: 'monday',
        value: {
            morning: 15,
            day: 25,
            evening: 20
        }
    },
    {
        day: 'tuesday',
        value: {
            morning: 13,
            day: 28,
            evening: 19
        }
    },
    {
        day: 'wednesday',
        value: {
            morning: 14,
            day: 24,
            evening: 23
        }
    },
    {
        day: 'thursday',
        value: {
            morning: 17,
            day: 30,
            evening: 20
        }
    },
    {
        day: 'friday',
        value: {
            morning: 16,
            day: 30,
            evening: 20
        }
    },
    {
        day: 'saturday',
        value: {
            morning: 15,
            day: 29,
            evening: 17
        }
    },
    {
        day: 'sunday',
        value: {
            morning: 14,
            day: 27,
            evening: 16
        }
    }
]
console.log(temperature);
