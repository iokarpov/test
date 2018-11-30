let a1 = 50;

if (a1 < 49) {
    console.log('Меньше 49');
} else if(a1 > 100) {
    console.log('Больше 100');
} else {
    console.log('more then 49 and less then 100');
}

(a1 == 49) ? console.log('yes') : console.log('no');

switch (a1) {
    case a1 < 49:
        console.log('less then 49');
        break;
    case a1 > 100:
        console.log('more then 100');
        break;
    case a1 > 80:
        console.log('more then 80');
        break;
    case 50 :
        console.log('yes! its 50');
        break;
    default:
        console.log('hz');
        break;
}   

let a1 = 50;

while (a1 < 55) {
    console.log(a1);
    a1++;
}

a1 = 50;

do {
    console.log(a1);
    a1++;
}
while (a1 < 55);

for (let i = 1; i <=10; i++) {
    if (i == 6){
        continue;
    }
    console.log(i);
}