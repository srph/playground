import path from 'path';
import Express from 'express';


const app = new Express();
const port = process.env.PORT || 3000;

app.use(require('serve-static')(path.join(__dirname, '../dist')));
app.use(require(__dirname + '/utils/handleRender'));

app.listen(port, function(err) {
  if ( err ) {
    console.error(err);
  } else {
    console.log(`Listening to port ${port}.`);
  }
})