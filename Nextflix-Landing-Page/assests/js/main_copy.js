// get elements
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select tab content
function selectItem(e){
    // remove border and show item
    removeBorder();
    removeShow();
    // add border to current item
    this.classList.add("tab-border");
    // get content of current item 
    // add content to DOM// show content
    const queryContent = `${this.id}-content`;
    for(let i = 0; i < tabContentItems.length; i++) {
        if (tabContentItems[i].id === queryContent){
            tabContentItems[i].classList.add("show");
            break;
        }
    }
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove("tab-border")
    });
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove("show");
    });
}


// listen click event
tabItems.forEach(item => {
    item.addEventListener("click",selectItem);
});