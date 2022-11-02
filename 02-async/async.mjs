function testPromise(){
    return Promise.resolve("Ucup Surucup")
}

// this allows in file .mjs, because in default .mjs already asynchronous
const name = await testPromise();
console.info(name)