const fs = require('fs');

// // Nagłówek DXF – każda sekcja musi się zaczynać od 0 SECTION i kończyć ENDSEC
// let dxf = `
// 0
// SECTION
// 2
// HEADER
// 9
// $ACADVER
// 1
// AC1009
// 0
// ENDSEC
// 0
// SECTION
// 2
// TABLES
// 0
// ENDSEC
// 0
// SECTION
// 2
// BLOCKS
// 0
// ENDSEC
// 0
// SECTION
// 2
// ENTITIES`;

// // ==== GEOMETRIA – prostokąt ====
// // Każda linia to osobna encja typu LINE (0 oznacza typ encji)
// // 8 – warstwa, 10/20 – początek (x, y), 11/21 – koniec (x, y)

// // Dolna krawędź (0,0) → (100,0)
// dxf += `
// 0
// LINE
// 8
// 0
// 10
// 0
// 20
// 0
// 11
// 100
// 21
// 0`;

// // Prawa krawędź (100,0) → (100,50)
// dxf += `
// 0
// LINE
// 8
// 0
// 10
// 100
// 20
// 0
// 11
// 100
// 21
// 50`;

// // Górna krawędź (100,50) → (0,50)
// dxf += `
// 0
// LINE
// 8
// 0
// 10
// 100
// 20
// 50
// 11
// 0
// 21
// 50`;

// // Lewa krawędź (0,50) → (0,0)
// dxf += `
// 0
// LINE
// 8
// 0
// 10
// 0
// 20
// 50
// 11
// 0
// 21
// 0`;

// // Zakończenie sekcji i pliku
// dxf += `
// 0
// ENDSEC
// 0
// EOF`;

let dxf = [
	// HEADER
	'0',
	'SECTION',
	'2',
	'HEADER',
	'9',
	'$ACADVER',
	'1',
	'AC1009',
	'0',
	'ENDSEC',

	// HELPERS
	'0',
	'SECTION',
	'2',
	'TABLES',
	'0',
	'ENDSEC',

	'0',
	'SECTION',
	'2',
	'BLOCKS',
	'0',
	'ENDSEC',

	// ENTITIES
	'0',
	'SECTION',
	'2',
	'ENTITIES',

	// RECTANGLE
	// Dolna krawędź (0,0) → (100,0)
	'0',
	'LINE',
	'8',
	'0',
	'10',
	'0',
	'20',
	'0',
	'11',
	'100',
	'21',
	'0',

	// Prawa krawędź (100,0) → (100,50)
	'0',
	'LINE',
	'8',
	'0',
	'10',
	'100',
	'20',
	'0',
	'11',
	'100',
	'21',
	'50',

	// Górna krawędź (100,50) → (0,50)
	'0',
	'LINE',
	'8',
	'0',
	'10',
	'100',
	'20',
	'50',
	'11',
	'0',
	'21',
	'50',

	// Lewa krawędź (0,50) → (0,0)
	'0',
	'LINE',
	'8',
	'0',
	'10',
	'0',
	'20',
	'50',
	'11',
	'0',
	'21',
	'0',

	// END
	'0',
	'ENDSEC',
	'0',
	'EOF',
].join('\n');

// pokaz w konsoli
console.log(dxf);

// Zapisz do pliku
fs.writeFileSync('rectangle.dxf', dxf.trim(), 'utf8');
console.log('✅ Utworzono plik rectangle.dxf');
