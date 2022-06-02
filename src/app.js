let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
//let domain = [".com", ".net", ".us", ".io"];

function domainGenerator() {
  for (let adjs of adj) {
    for (let pron of pronoun) {
      for (let nou of noun) {
        console.log("" + pron + adjs + nou + ".com");
      }
    }
  }
}

domainGenerator();
