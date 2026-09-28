
function onResize() {
    maxwidth = 920;
    if (document.body.clientWidth <= maxwidth) {
        document.body.style.backgroundSize = "920px 140px"; 
        document.body.style.backgroundPosition = 'left top';
    } else {
        document.body.style.backgroundSize = "920px 140px"; 
        document.body.style.backgroundPosition = 'center top';    
    }    
};

function onLoad() {
    onResize();
};

function unfold(button) {
    /** Replaces a folded range of pages (e.g. 0-9) with the buttons it holds. */
    button.parentNode.className = "pageFold pageFoldOpen";
};
