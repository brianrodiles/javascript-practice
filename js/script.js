const car = [
    {
        "make":"Jeep",
        "model":"Compass",
        "year":2013,
        "color":"black"
    },
    {
        "make":"Ford",
        "model":"Bronco",
        "year":2022,
        "color":"white"
    },
    {
        "make":"Peugot",
        "model":"308",
        "year":2021,
        "color":"green"
    },
    {
        "make":"Porshe",
        "model":"Cayenne S",
        "year":2020,
        "color":"blue"
    }
]

console.log("Info about cars:");
for(let i = 0; i < 4; i++){
    console.log(`Car ${i}: ${car[i]["make"]} ${car[i]["model"]} ${car[i]["year"]} in ${car[i]["color"]}.`);
}
