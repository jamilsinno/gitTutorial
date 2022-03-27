const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick' ]

const transportation = data.reduce(function (obj, index){
    if(!obj[index]){
        obj[index] = 0
    }
    obj[index]++
    return obj
}, {})