// text-editor.js
document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const consoleOutput = document.getElementById('console-output');
    const fileExplorerItems = document.querySelectorAll('#file-explorer li');

    // Simulate file opening
    fileExplorerItems.forEach(item => {
        item.addEventListener('click', function() {
            const fileName = item.textContent;
            openFile(fileName);
        });
    });

    function openFile(fileName) {
        // Simulate loading file content into the editor
        if (fileName === 'index.html') {
            codeEditor.value = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>`;
        } else if (fileName === 'text-editor.css') {
            codeEditor.value = `body {\n    background-color: #f0f0f0;\n    color: #333;\n    font-family: Arial, sans-serif;\n}`;
        } else if (fileName === 'text-editor.js') {
            codeEditor.value = `console.log('Hello, World!');`;
        }
    }

    // Simulate running code and displaying output
    codeEditor.addEventListener('input', function() {
        consoleOutput.textContent = 'Output: ' + codeEditor.value;
    });
});
