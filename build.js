var fs = require('fs')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var Gallery = require('./dist/src/components/gallery.js').Gallery


function renderCompToFile(compToRender, out) {
    var renderedComp = ReactDOMServer.renderToStaticMarkup(React.createElement(compToRender))

    var template = `
    <html>
    <head>
    </head>
    <style>
        body { 
        background: black;
        color: white;
        }
    </style>
    <body>
        <div id="qbllr-root">
        ${renderedComp}
        </div>
        ${
            fs.readdirSync('./public')
            .filter(function(file){return !!~file.indexOf('bundle.js')})
            .map(function(file) { 
                return `<script type="text/javascript" src="/dist/public/${file}"></script>`
            }) 
            .join('')
        }
    </body>
    </html>`

    fs.writeFile(out, template)
}

renderCompToFile(Gallery, 'index.html')
