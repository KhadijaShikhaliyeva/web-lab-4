let birincieded = parseInt(prompt("Birinci tam ədədi daxil edin: "));
let ikincieded = parseInt(prompt("İkinci tam ədədi daxil edin: "));

let ilkeded;
let soneded;
let netice = "";

if (birincieded > ikincieded) {
    ilkeded = ikincieded;
    soneded = birincieded;
} else {
    ilkeded = birincieded;
    soneded = ikincieded;
}

for (let i = ilkeded; i <= soneded; i++) {
    netice = netice + i + " ";
}

alert("Tapılan tam ədədlər: " + netice);