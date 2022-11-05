function testPromise(){
    return Promise.resolve("Muhammad Arsil Alhabsy")
}

// should return an error, because await isn't in a async function
// const name = await testPromise();

// must be like this
async function run(){
const name = await testPromise();
console.info(name);

}
run();
