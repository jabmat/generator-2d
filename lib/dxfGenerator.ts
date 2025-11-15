export function generateRectangleDXF(width: number, height: number): string {
	function n(v: number) {
		return String(v);
	}
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
