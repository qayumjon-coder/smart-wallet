/* let counts = {};

function fruitCounter(fruits){
    for(let fruit of fruits){
        if(counts[fruit]){
            counts[fruit] += 1;
        }else{
            counts[fruit] = 1;
        }
    }
    return counts;
}
fruitCounter(['olma', 'banan', 'olma', 'apelsin', 'banan', 'olma']);
console.log(counts);
 */

// let aralashIsm = ['aLi', 'VALI', 'saLIm', 'Olim'];
// let tozalanganIsm = aralashIsm.map((value) => {
//     if (!value) return value;
//     const v = value.trim();
//     return v[0].toUpperCase() + v.slice(1).toLowerCase();
// });
// console.log(tozalanganIsm);

// const products = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Sichqoncha', price: 25 },
//     { name: 'Monitor', price: 600 },
//     { name: 'Klaviatura', price: 150 }
// ];

// // > 500 namelarini olish
// let filteredWithMap = products.filter((value) => value.price > 500).map((value) => value.name);
// console.log(filteredWithMap);

// const users = [
//     { id: 1, name: 'Ali', favorites: { books: ['O\'tgan kunlar', 'Mehrobdan chayon'] } },
//     { id: 2, name: 'Vali', favorites: { books: ['Sariq devni minib', 'Ufq'] } },
//     { id: 3, name: 'Guli', favorites: { books: ['Shaytanat'] } }
// ];

// let allFavorites = users.flatMap((user) => user.favorites.books);
// console.log(allFavorites);

// const students = [
//     { name: 'Ali', score: 85 },
//     { name: 'Vali', score: 45 },
//     { name: 'Guli', score: 92 },
//     { name: 'Salim', score: 50 },
//     { name: 'Olim', score: 60 }
// ];

// let grouped = students.reduce((acc, val) => {
//     const key = val.score >= 60 ? 'passed' : 'failed';
//     if (!acc[key]) {
//         acc[key] = [];
//     }
//     acc[key].push(val.name);
//     return acc;
// }, {});
// console.log(grouped);

// const grouped = Object.groupBy(students, ({ score }) => 
//   score >= 60 ? 'passed' : 'failed'
// );
// console.log(grouped);

/* function checkStock(productName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1.5 soniya o'tdi");

            if(!productName){
                reject("Mahsulot nomi kiritilmadi!");
            }else{
                resolve({name: productName, count: 5});
            }
        }, 1500)
    })
}

async function processOrder(){
    console.log("So'rov yuborildi...");

    try {
        const data = await checkStock("");

        if (data.count <= 0){
            console.log("Kechirasiz, mahsulot tugagan.");
        }else{
            console.log(`${data.name} sotuvda bor, buyurtma qabul qilindi!`);
        }
    } catch (err) {
        console.log("XATO YUZ BERDI:", err);
    }
    
}
processOrder() */

/* const people = [
    { firstName: "Ali ", lastName: "Valiyev", age: 15 },
    { firstName: "Guli ", lastName: "Anvarova", age: 22 },
    { firstName: "Olim ", lastName: "Sodiqov", age: 18 },
    { firstName: "Zuhra ", lastName: "Qodirova", age: 30 }
];

const fullNames = people.filter((element) => element.age >= 18).map((element) => {
    return { fullName: `${element.firstName} ${element.lastName}`, age: `${element.age}`};
});

console.log(fullNames); */

/* const products = [
    { name: "Non", price: 4000 },
    { name: "Sut", price: 9000 },
    { name: "Olma", price: 15000 },
    { name: "Shokolad", price: 12000 }
];

const isThereProduct = products.some((value) => value.name == "Olma");
const isHigherThan10k = products.find((value) => value.price >= 10000);
console.log(isHigherThan10k);
console.log(isThereProduct); */

// class Song {
//     constructor(title, author, duration) {
//         this.title = title,
//         this.author = author,
//         this.duration = duration
//     }

//     static compareDuration(song1, song2){
//         if(song1.duration > song2.duration){
//             return song1.title;
//         }
//         return song2.title;
//     }

//     getInfo() {
//         return `Muallif: ${this.author}, Qo'shiq: ${this.title}, Davomiyligi: ${this.duration}`;
//     }

//     getDurationInMinutes() {
//         return this.duration / 60
//     }

//     playWithDelay(){
//         console.log("Tayyorlanmoqda...");
        

//         setTimeout(() => {
//             console.log(`Hozir ${this.title} ijro etilmoqda...`);
//         },2000);
        
//     }
// }
// const mySong = new Song("O'tgan kunlar", "Ali", 180);
// console.log(mySong.getInfo());
// console.log(mySong.getDurationInMinutes());
// mySong.playWithDelay();

/* 
const s1 = new Song("A", "Auth", 200);
const s2 = new Song("B", "Auth", 300);
console.log(Song.compareDuration(s1,s2)); */









/* class Podcast extends Song{
    constructor(title, author, duration, topic){
        super(title, author, duration);
        this.topic = topic;
    }

    getInfo(){
        return `${super.getInfo()}, Mavzu: ${this.topic}`
    }
}
const allSong = new Podcast("O'tgan kunlar", "Ali", 180, "Romance");
console.log(allSong.getInfo());
console.log(allSong.getDurationInMinutes()); */

// let array = [10, 5, 28, 1, 15];

// 1-usul
// let maxSon = array[0];
// for(let i in array){
//     if(array[i] > maxSon){
//         maxSon = array[i];
//     }
// }
// console.log(maxSon);

// 2-usul
// const maxSon = [10, 5, 28, 1, 15].reduce((a, b) => Math.max(a, b));
// console.log(maxSon);

// Juft sonlar

// let array = [1,2,3,4,5,6,7,8,9].filter((i) => {
//     return i % 2 == 0;
// });
// console.log(array);


// Name search
// let ismlar = ["Ali", "Vali", "Anvar", "Sardor", "Asal", "ananas"].filter((item) => {
//     return item.startsWith("A");
// })
// console.log(ismlar);

// variant 2
// const searchNames = (names) => {
//     return names.filter((item) => {
//         return item.startsWith("A")
//     }); 
// }

// console.log(searchNames(["Ali", "Vali", "Anvar", "Sardor", "Asal"]));


// Mapping: Increasing the array values.
// let values = [100, 200, 300, 400].map((item) => {
//     let resultFinal = item * 1.15;
//     return Math.ceil(resultFinal);
// });
// console.log(values);


// Foydalanuvchilarni saralash
// const users = [
//     { name: "Ali", age: 15 },
//     { name: "Vali", age: 22 },
//     { name: "Sardor", age: 17 },
//     { name: "Madina", age: 30 }
// ].filter((item) => {
//     return item.age > 18;
// }).map((item) => {
//     return item.name;
// });
// console.log(users);


// Savatdagi mahsulotlar narxini hisoblash
// const basket = [
//     { product: "Non", price: 3000, count: 2 },
//     { product: "Sut", price: 8000, count: 1 },
//     { product: "Shokolad", price: 15000, count: 3 }
// ].reduce((total, item) => {
//     return total += item.price * item.count;
// }, 0);
// console.log(basket);
