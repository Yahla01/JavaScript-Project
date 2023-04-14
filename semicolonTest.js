console.log ("Hello, World!");




const palace = "VENTURES";
let sout = "";

for (let i = 0; i < palace.length; i += 2) {
  sout += palace[i];
  if (i + 1 < palace.length) {
    sout += palace[i + 1];
  }
  sout += " ";

}
console.log(sout);






const semi = [1, 3, 4, 5];
const colon = [2, 6,  7, 6];

const mergedArray = semi.concat(colon);
console.log(mergedArray); 





