const person1 = {
    age : 25,
};

const person2 = {
    name : "박규현",
    age : 25,
};

function getName(person)
{
    let name = person && person.name
    return name || "이름 없음";
}

const name = getName();
const name1 = getName(person1);
const name2 = getName(person2);

console.log(name);
console.log(name1);
console.log(name2);