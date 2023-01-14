const render = function() {
    const content = document.querySelector('#content');
    for (let i = content.children.length; i > 0; i--) {
        content.firstChild.remove();
    }
};

export default render