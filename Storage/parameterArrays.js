'use strict';

//insert into superheros (heroID, name, yearOfBirth, gear, costume)
const toInsertArray = hero => [
    Number(hero.heroID), hero.name, hero.yearOfBirth, 
    hero.gear, hero.costume
];

//update hero set name=?, yearOfBirth=?, gear=?, costume=?",
// "where id=?"

const toUpdateArray = hero => [
    hero.name, hero.yearOfBirth, hero.gear,
    hero.costume, Number(hero.heroid)
];

module.exports={toInsertArray, toUpdateArray}