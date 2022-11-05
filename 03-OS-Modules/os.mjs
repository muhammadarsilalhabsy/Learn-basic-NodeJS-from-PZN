import os from "os";

console.info("release = " +os.release());
console.info("total memory = " + os.totalmem());
console.table(os.cpus())
console.info("os version = " + os.version());
