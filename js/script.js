// Using promises ==> Object that changes from a pending state to either
// a fulfilled or rejected state.
// For more info: https://www.youtube.com/watch?v=DHvZLI7Db8E
// Similar to try-catch exceptions
function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve("In Google Menu.");
        }
        else{
            reject(`In ${location}.\nNot in Google's menu.`);
        }
    })
}
function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response...');
        resolve(`Extra Information: ${response}`);
    })
}

// makeRequest('Google').then(response  => {
//     console.log('Response received.');
//     return processRequest(response);
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err);
// })

// Mostly used for timers and put external stuff on a site.
const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("aaaaaaaa!!"); 
    }, 3000);
});

myPromise.then(function(message){
    console.log(message);
});

// Using async await
async function doWork(){
    try{
        const response = await makeRequest('Facebook');
        console.log('Response received.');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    }catch (err){
        console.log(err);
    }
}
doWork();

// Chaining is also available for promises