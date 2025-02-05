const sass = require("sass");

const result = sass.compile("./app.scss");

console.log(result);

// OR

// Note that `compileAsync()` is substantially slower than `compile()`.
// const result = await sass.compileAsync(scssFilename);
