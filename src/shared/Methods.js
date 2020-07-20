export const LOGGER = (key, value) => {
    console.log(key.toLowerCase(), value)
}

export const convertString = (data) =>{
    let secondString = [];
    let emptyArray = [];

    let arrayFromData = data.split('');
    emptyArray.push(arrayFromData[0].toUpperCase());
    for(let i = 1; i < arrayFromData.length; i++){
        if(arrayFromData[i] === arrayFromData[i].toUpperCase()){
            let temp = i - 1;
            secondString[temp] = ' ';
            secondString.push(arrayFromData[i]);

        }else{
            secondString.push(arrayFromData[i]);
        }
    }

    let finalArray = [...emptyArray, ...secondString];

    return finalArray.join('');
}


export const  myIcon = (icon) => {
    let matches = String(icon).match(/\b(\w)/g);
    console.log(matches)
     let mystr = [];
     mystr.push((matches[0]).toUpperCase());
     if(matches.length > 1){
         mystr.push((matches[1]).toUpperCase());
     }
     return mystr.join('');
}