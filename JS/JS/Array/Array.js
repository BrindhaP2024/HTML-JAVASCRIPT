window.onload = function() {
    let novels = ["Godan", "Train to Pakistan", "The White Tiger", "Midnight's Children", "The God of Small Things"];

    novels.push("The Inheritance of Loss");
    document.getElementById("push").innerText = "push() - Add to end: " + novels;

    novels.pop();
    document.getElementById("pop").innerText = "pop() - Remove from end: " + novels;

    novels.shift();
    document.getElementById("shift").innerText = "shift() - Remove from start: " + novels;

    novels.unshift("The Guide");
    document.getElementById("unshift").innerText = "unshift() - Add to start: " + novels;

    let upperCaseNovels = novels.map(novel => novel.toUpperCase());
    document.getElementById("map").innerText = "map() - Uppercase novels: " + upperCaseNovels;

    let longNovels = novels.filter(novel => novel.length > 10);
    document.getElementById("filter").innerText = "filter() - Novels with more than 10 characters: " + longNovels;

    let totalLength = novels.reduce((acc, novel) => acc + novel.length, 0);
    document.getElementById("reduce").innerText = "reduce() - Total length of all novel names: " + totalLength;

    let novelList = "";
    novels.forEach(novel => novelList += novel + " ");
    document.getElementById("forEach").innerText = "forEach() - List of novels: " + novelList;

    let slicedNovels = novels.slice(1, 3);
    document.getElementById("slice").innerText = "slice() - Portion of array (index 1 to 3): " + slicedNovels;

    novels.splice(1, 1, "The Village by the Sea");
    document.getElementById("splice").innerText = "splice() - Remove 1 element at index 1, add 'The Village by the Sea': " + novels;

    let index = novels.indexOf("The White Tiger");
    document.getElementById("indexOf").innerText = "indexOf() - Index of 'The White Tiger': " + index;

    let hasGodan = novels.includes("Godan");
    document.getElementById("includes").innerText = "includes() - Does array contain 'Godan'? " + hasGodan;

    let moreNovels = ["The Lovely Bones", "The Kite Runner"];
    let allNovels = novels.concat(moreNovels);
    document.getElementById("concat").innerText = "concat() - Combine two arrays: " + allNovels;

    let sortedNovels = novels.sort();
    document.getElementById("sort").innerText = "sort() - Sort novels alphabetically: " + sortedNovels;

    let reversedNovels = novels.reverse();
    document.getElementById("reverse").innerText = "reverse() - Reversed order: " + reversedNovels;

    let novelString = novels.join(", ");
    document.getElementById("join").innerText = "join() - Array as a string: " + novelString;

    let foundNovel = novels.find(novel => novel.startsWith("The"));
    document.getElementById("find").innerText = "find() - First novel starting with 'The': " + foundNovel;
};
