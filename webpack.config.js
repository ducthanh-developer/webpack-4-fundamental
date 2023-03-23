
module.exports = (env, argv) => {
    console.log(argv);
  
    return {
      mode: argv.mode,
      output:{
        filename: "bundle.js",
      }
    }
  }