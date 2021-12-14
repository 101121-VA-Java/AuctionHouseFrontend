
// async function getArtPieceInfo(){
//     let apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
//     let response = await fetch(apiUrl);
//     if(response.status >= 200 && response.status < 300){
//       let data = await response.json();
//         if(data != null){
//             let gallery = data["objectIDs"];
//             let nArtPieces = [];
//             while(nArtPieces.length<=10){
//                 for(let i = 0; i<gallery.length; i++){
//                     if(gallery[i] && (gallery[i]["primaryImage"] || gallery[i]["primaryImageSmall"])){
//                         art = {a_id:gallery[i]["objectID"],
//                                 a_url:(gallery[i]["primaryImage"]? 
//                                     gallery[i]["primaryImage"] : 
//                                     gallery[i]["primaryImageSmall"]),
//                                 a_artist_name:gallery[i]["artistDisplayName"],
//                                 a_artpiece_name:gallery[i]["objectName"]
//                             }
//                     }

//                 }
//             }
//             return nArtPieces.json();
//         }
//     }
// }
/**
 * 
 * searchQuery = 'search?isPublicDomain=true&hasImage=true&q=*'
 * let's list some ten item categories and make those items our auction themes
 * the auctioneer's page has a dropdown of themes 
 * auctioneer selects from the dropdown list of themes to create the auction
 * the selected theme is passed as 'type' (a search query param) to the api
 * the first 10 objectIDs are sliced out of the response data
 * the 10 items are listed (by objectId?) in a dropdown to view items in auction
 * a slected item is displayed with info in the auction model including image
 

async function getArtPieceInfo(type){
    let themes = [];
    let apiUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${type}`;
    let response = await fetch(apiUrl);
    if(response.status >= 200 && response.status < 300){
      let data = await response.json();
        if(data){
            //[1, 2, 3, 4, 5,...]
            //data.slice(0, 4); // [1, 2, 3, 4]
            //for iterate over the sliced array
            //insert each image into the dom
        }
    }
}
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// https://www.freakyjolly.com/angular-how-to-get-dropdown-selected-text-using-common-service-method/