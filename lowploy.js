var triangulate = require('triangulate-image');
var fs = require('fs');

fs.readFile( './flower.jpg', function ( err, buffer ) {
	if ( err ) { throw err; }
		
	var svgMarkup = triangulate().fromBufferSync( buffer ).toSVGSync();

	fs.writeFile( './flower.svg', svgMarkup, function ( err ) {
		if ( err ) { throw err; }
		console.log( 'created an svg file.' );
	} );
} );