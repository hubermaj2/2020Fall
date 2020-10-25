/* B"H

*/

const data = [{ name: 'Moshe', age: 43}, { name: 'Biden', age: 78 }]

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return data;
}

async function add(name, age){
    data.push({name, age});
}

function rand() {
    var someVal = 0;
    const p = new Promise((resolve, reject)=>{

    })
    setTimeout(() => {
        for (let index = 0; index < 999*999; index++){
            someVal = index * Math.random();
        }
        resolve(someVal)
    }, 1);
    return;
}


module.exports = { getAll, rand, add, search: async q => data.filter(x=> x.name == q) }