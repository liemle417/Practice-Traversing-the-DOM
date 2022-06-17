// STARTING POINT
const list = document.querySelector('.list');

// 1: Store the first child of the `ul` in the variable `firstItem`

//const firstItem = list.firstElementChild;
const firstItem = list.children[0];
firstItem.style.backgroundColor = '#04c5e6';

// 2: Using traversal, store the second list item in a variable named `nextItem`

//const nextItem = firstItem.parentElement.children[1];
//const nextItem = list.children[1];
const nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = '#b7c7d0';

// 3: Store the last child of the `ul` in a variable named `lastItem`

const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = '#57d6ab';

// 4: Using traversal, store the second-to-last list item in a variable named `prevItem`

//const prevItem = lastItem.parentElement.children[2];
//const prevItem = list.children[2];
const prevItem = lastItem.previousElementSibling;

prevItem.style.backgroundColor = '#f36f49';

// 5: Store the nested div in a variable named `banner`
const banner = list.previousElementSibling;
banner.className = 'banner';

// 6: Using traversal, store the wrapper div in a variable named `wrapper`
const wrapper = list.parentNode; 
                    //we can use parentElement.
                    //parentElement is new to Firefox 9 and to DOM4, but it has been present in all other major browsers for ages.
                    //In most cases, it is the same as parentNode. The only difference comes when a node's parentNode is not an element. If so, parentElement is null.

wrapper.style.backgroundColor = '#fcfcfc';

// 7: Using traversal, store the body in a variable named `body`

const body = list.parentElement.parentElement;

//OR don't you notice wrapper = list.parentElement. It's just a different name. That means, we can write body = wrapper.parentElement or parentNode.
body.style.backgroundColor = '#f8fdf3';






