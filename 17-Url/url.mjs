import { URL } from 'url';

const website = new URL('https://www.youtube.com/watch?v=b39Xqf5iyjo&t=9977s&ab_channel=ProgrammerZamanNow');

console.info(website.protocol);
console.info(website.host);
console.info(website.href);
console.info(website.pathname);
console.info(website.searchParams);
console.info(website.search);

// modifikasi
website.hostname = 'www.kuynonton.com';
website.pathname = 'videos';
website.searchParams.append('role', 'member');

console.info(website.toString());
console.info(website.searchParams);
