var triangulate = require('triangulate-image');
var program = require('commander');
var fs = require('fs');

program.version('0.1.0');

program
  .command('*')
  .action(function(file){
    console.log('convert "%s"', file);
    var filePath = __dirname + '/' + file;
    fs.readFile( filePath, function ( err, buffer ) {
        if ( err ) { throw err; }
            
        var svgMarkup = triangulate().fromBufferSync( buffer ).toSVGSync();

        fs.writeFile( './ouput.svg', svgMarkup, function ( err ) {
            if ( err ) { throw err; }
            console.log( 'created an svg file.' );
        });
    });
  });

program.parse(process.argv);
  