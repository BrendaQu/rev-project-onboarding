// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// --> ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// --> ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// --> ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// --> ["#visualizing", "#science"]


function getHashTags(str) {
    const arr = str.split(" ");

    //length of each item
    let item_len = [];

    //store top lengths index
    let item_max_len = [];
    
    //store top strings
    let result = [];

    //get length of item and corresponding index
    for (let i = 0; i < arr.length; i++) {

        item_len.push([arr[i].length, i]);
    }

    //get top strings index. check array size, loop only 3 times to get top 3 words. If array size less 3 loop 1 or 2 times. 
    let n = 0;
    if (arr.length >= 3) {
        while (n < 3) {
            let max = 0;
            let index = 0;
            let r_index = 0;
            for(let i = 0; i < item_len.length; i ++){
                if(item_len[i][0] > max){
                    max = item_len[i][0];
                    index = item_len[i][1];
                    r_index = i;
                }
            }
            item_len.splice(r_index, 1);
            item_max_len.push(index);
            n++;
        }
    } else {
        while (n < arr.length) {
            let max = 0;
            let index = 0;
            let r_index = 0;
            for(let i = 0; i < item_len.length; i ++){
                if(item_len[i][0] > max){
                    max = item_len[i][0];
                    index = item_len[i][1];
                    r_index = i;
                }
            }
            item_len.splice(r_index, 1);
            item_max_len.push(index);
            n++;
        }
    }


    //get words from index and store into result array
    for(let i = 0; i < item_max_len.length; i++){
        result.push("#" + arr[item_max_len[i]].toLowerCase());
    }

    return result;
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));
