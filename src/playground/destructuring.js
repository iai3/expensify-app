// OBJECT DESTRUCTURING

const person = {
    name: 'Reira',
    age: 24,
    location: {
        city: 'New York',
        temp: 32
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);


const { city, temp: temperature } = person.location;
if (temperature && city) {
    console.log(`It's ${temperature}C in ${city}.`);
}

// ARRAY DESTRUCTURING

const address = [
    '1299 s Juniper',
    'London',
    'UK',
    '56345'
];
console.log(`You are in ${address[1]} ${address[2]}.`);

const [street = 'Downton', town, country, zip] = address;
console.log(`You are in ${town} ${country}. ${street} Street`);