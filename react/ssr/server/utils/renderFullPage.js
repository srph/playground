export default function renderFullPage(markup) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Hello, World</title>
        <meta charset="utf-8">
      </head>

      <body>
        <div id="mount">${markup}</div>

        <script src="./dist/script.js"></script>
      </body>
    </html>
  `;
}