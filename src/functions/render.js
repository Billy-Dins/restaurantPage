const render = function() {
    const content = document.querySelector('#content');
    for (let i = 0; i < content.children.length; i++) {
        content.firstChild.remove();
    }
};

export { render }