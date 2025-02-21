import {  Oswald } from 'next/font/google'
 
// define your variable fonts
const oswald = Oswald({
    subsets: ['latin'], // Specify the required subset(s)
    preload: true,      // Enable preloading
  }); 
export { oswald }