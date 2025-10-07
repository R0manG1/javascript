//#Rbr5kEQ – є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map  перетворити всі об’єкти в масиві на стрінгові.
let arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStrings = arrNumbers.map(number => number.toString());
console.log(arrStrings);

//#5hqyKTfmc – створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]
let nums = [11, 21, 3];

function sortNums(array, direction) {
    let exitSortArray = [];
    if (direction === 'ascending') {
        exitSortArray = [...nums].sort((num1, num2) => num1 - num2);
        return exitSortArray;
    } else if (direction === 'descending') {
        exitSortArray = [...nums].sort((num1, num2) => num2 - num1);
        return exitSortArray;
    }
    return console.log('Error!');
}

console.log(sortNums(nums, 'descending'));
console.log(nums);

//#yo06d74c1C – є масив
//  let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
//  ];
// — відсортувати його за спаданням за monthDuration
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortArr = [...coursesAndDurationArray]
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter((iter) => iter.monthDuration > 5)
    .map((item, index) => {
        return {
            id: index + 1,
            title: item.title,
            monthDuration: item.monthDuration
        };
    });
console.log(sortArr);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//#4LJn7zBx взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker
let modulesFilterBySass = coursesArray
    .filter((item) => item.modules
        .includes('sass'));
console.log(modulesFilterBySass);

let modulesFilterByDocker = coursesArray
    .filter((item) => item.modules
        .includes('docker'));
console.log(modulesFilterByDocker);
