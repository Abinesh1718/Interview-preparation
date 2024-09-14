
const temp = require('./temp.json')


function test() {
    let result = []

    let resultvalue = temp.items.map(data => data.categories)
    // console.log(resultvalue);
    let categories = resultvalue.flat(Infinity).filter(data => data?.id === '49893').forEach(valu => result.push(valu.name))
    console.log(result);

}


// test()


function MinandMaxRepeting(str) {
    let firstoccurance = {}
    let lastoccurance = {}
    let maxindex = Infinity
    let minIndex = -Infinity
    let minchar = ''
    let maxchar = ''


    for (let i = 0; i < str.length; i++) {
        let chat = str[i]
        if (firstoccurance[i] == undefined) {
            firstoccurance[chat] = i
        }
        lastoccurance[chat] = i
    }


    for (let char of firstoccurance) {

    }

}

// console.log(MinandMaxRepeting("abchahbhaaa"));  