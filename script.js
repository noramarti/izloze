const vardi = ['Nora Martinsone', 'Anna Bērza', 'Jānis Ozols', 'Roberts Egle', 'Linda Bērziņa'];
const balvas = ['Dators', 'Ledusskapis', 'Telefons', 'Automašīna', 'Viedpulkstenis'];
const naudaKopa = 100000;//kopējā summa
let uzvaretajuSkaits = 5;
let rindas=document.querySelector('.rindas');
rindas.innerHTML= ' ';
for (let i=0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand= Math.floor(rand);//noapaļo skaitli uz leju
    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
   


<tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
</tr>`
}