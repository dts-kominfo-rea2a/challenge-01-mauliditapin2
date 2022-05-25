// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const Yellow = "Yellow";
const Pink = "Pink";
const White = "White";
const Purple = "Purple";
const Blue = "Blue";
const Black = "Black";
const Grey = "Grey";

const Bento = "Bento";
const Sushi = "Sushi";
const Pancake = "Pancake";
const Eggy = "Eggy";
const Tempura = "Tempura";
const Padang = "Padang";
const Tteok = "Tteok";
const Katsu = "Katsu";
const Geprek = "Geprek";

const favoriteColorMonica = [Yellow, Pink, White, Purple];
const SetColorMonica = new Set(favoriteColorMonica);

const favoriteColorWendy = [Blue, Black, Grey];
const SetColorWendy = new Set(favoriteColorWendy);

const favoriteRestaurantMonica = [Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sushi];
const SetfavoriteRestaurantMonica = new Set(favoriteRestaurantMonica);

const favoriteRestaurantWendy = [Tempura, Bento, Sushi, Pancake, Padang, Katsu, Geprek, Pancake, Eggy];
const SetfavoriteRestaurantWendy = new Set(favoriteRestaurantWendy);

const arrEducationMonica = [
    { name: 'SD 01', city: 'Jakarta',graduate: '2016'  },
    { name: 'SMP 02', city: 'Jakarta',graduate: '2016'  },
    { name: 'SMA 03', city: 'Tangerang',graduate: '' }
];



const arrEducationWendy = [
    { name: 'SD 02', city: 'Jakarta',graduate: '2010'  },
    { name: 'SMP 03', city: 'Bogor',graduate: '2013'  },
    { name: 'SMA 01', city: 'Surabaya',graduate: '2016' },
    { name: 'Universitas Maju', city: 'Tangerang',graduate: '' }
];



const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [...SetColorMonica],
    isHavePet: 'Yes',
    education: [...arrEducationMonica],
    favoriteRestaurant: [...SetfavoriteRestaurantMonica],
};
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: [...SetColorWendy],
    isHavePet: 'No',
    education: [...arrEducationWendy],
    favoriteRestaurant: [...SetfavoriteRestaurantWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};