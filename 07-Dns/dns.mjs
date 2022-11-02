import dns from "dns/promises"

// tidak memerlukan htttp://
const getDns = await dns.lookup("www.dicoding.com");

console.info(getDns.address)
console.info(getDns)


const getDnsService = await dns.lookupService(getDns.address, getDns.family);
console.info(getDnsService)