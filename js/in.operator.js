function getMedia(media) {
    if ("num" in media) {
        return media.num * 10;
    }

    return media.title;
}

console.log(getMedia({title: "Footble", num: 12}));
console.log(getMedia({title: "Footble", user: 12}));

const fruits = ["apple", "banana"];

if (0 in fruits) {
    console.log("Apple is one of my favorite fruits");
}

if (2 in fruits) {
    console.log("Two is there");
} else {
    console.log("Not found");
}