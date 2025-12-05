// number helper
function n(v: number) {
	return String(v);
}

export function generateRectangleDXF(width: number, height: number): string {
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

		// TABLES
		'0',
		'SECTION',
		'2',
		'TABLES',
		'0',
		'ENDSEC',

		// BLOCKS
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

		// E - rectangle - POLYLINE+VERTEX
		'0',
		'POLYLINE',
		'8',
		'0',
		'66',
		'1',
		'70',
		'1',

		'0',
		'VERTEX',
		'8',
		'0',
		'10',
		n(0),
		'20',
		n(0),
		'0',
		'VERTEX',
		'8',
		'0',
		'10',
		n(width),
		'20',
		n(0),
		'0',
		'VERTEX',
		'8',
		'0',
		'10',
		n(width),
		'20',
		n(height),
		'0',
		'VERTEX',
		'8',
		'0',
		'10',
		n(0),
		'20',
		n(height),

		'0',
		'SEQEND',

		// END
		'0',
		'ENDSEC',
		'0',
		'EOF',
	].join('\n');

	return dxf;
}

export function generateCircleDXF(diameter: number) {
	const radius = diameter / 2;

	const dxf = [
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

		// TABLES
		'0',
		'SECTION',
		'2',
		'TABLES',
		'0',
		'ENDSEC',

		// BLOCKS
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

		// E - Circle
		'0',
		'CIRCLE',
		'8',
		'0',
		'10',
		n(0), // X of center
		'20',
		n(0), // Y of center
		'30',
		n(0), // Z of center
		'40',
		n(radius), // radius

		// END
		'0',
		'ENDSEC',
		'0',
		'EOF',
	].join('\n');

	return dxf;
}
