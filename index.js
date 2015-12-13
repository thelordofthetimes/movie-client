var request = require('request');

function escape(html) {
    return String(html).replace(/&/g, '&amp;') 
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#39;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;');
}

function unescape(html) {
    return String(html).replace(/&amp;/g, '&')
       .replace(/&quot;/g, '"')
       .replace(/&#39;/g, '\'')
       .replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>');
}

module.exports = {escape: escape, unescape: unescape};
