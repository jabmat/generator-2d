'use client';

import { useState } from 'react';
import { generateRectangleDXF } from '@/lib/dxfGenerator';

export default function DxfForm() {
	const [width, setWidth] = useState<number | ''>('');
	const [height, setHeight] = useState<number | ''>('');

	const handleGenerate = () => {
		if (width === '' || height === '') {
			alert('Podaj szerokość i wysokość!');
			return;
		}

		const dxf = generateRectangleDXF(width, height);

		const blob = new Blob([dxf], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `rectangle-${width}-${height}.dxf`;
		a.click();

		URL.revokeObjectURL(url);
	};

	return (
		<div>
			<h2>Generator prostokąta DXF (R12)</h2>
			<div>
				<label>
					Szerokość:
					<input
						type="number"
						min="0"
						value={width}
						onChange={(e) => {
							const val = e.target.value;
							setWidth(val === '' ? '' : Number(val));
						}}
					/>
				</label>
			</div>

			<div>
				<label>
					Wysokość:
					<input
						type="number"
						min="0"
						value={height}
						onChange={(e) => {
							const val = e.target.value;
							setHeight(val === '' ? '' : Number(val));
						}}
					/>
				</label>
			</div>

			<button onClick={handleGenerate}>Pobierz DXF</button>
		</div>
	);
}
