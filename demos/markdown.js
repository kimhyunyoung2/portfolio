
function loadShowdown(callback) {
    let cssMarkdownCDN = document.createElement('link');
    cssMarkdownCDN.rel = 'stylesheet';
    cssMarkdownCDN.href = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css';
    document.head.appendChild(cssMarkdownCDN);

    let cssMarkdown = document.createElement('link');
    cssMarkdown.rel = 'stylesheet';
    cssMarkdown.href = './markdown.css';
    document.head.appendChild(cssMarkdown);

    let jsMarkdown = document.createElement('script');
    jsMarkdown.src = 'https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js';
    jsMarkdown.onload = function() {
      callback();
    };
    document.head.appendChild(jsMarkdown);
}

function initializeMarkdown() {
    let converter = new showdown.Converter();
    let markdownContent = document.querySelectorAll('.markdown-body');
    markdownContent.forEach(function(element) {
        let markdown = element.innerHTML;
        let html = converter.makeHtml(markdown);
        element.innerHTML = html;
    });
  }
  
document.addEventListener('DOMContentLoaded', function() {
  loadShowdown(initializeMarkdown);
});
