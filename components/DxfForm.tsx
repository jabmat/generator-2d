'use client';

import { useState } from 'react';
import { generateRectangleDXF } from '@/lib/dxfGenerator';
import CanvasPreview from './CanvasPreview';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { FormRow } from './ui/FormRow';
import { Heading } from './ui/Heading';
import { AcadWrapper } from './ui/AcadBox';

export default function DxfForm() {
	const [width, setWidth] = useState<number | ''>('');
	const [height, setHeight] = useState<number | ''>('');

	const handleGenerate = () => {
		const dxf = generateRectangleDXF(width as number, height as number);
		const blob = new Blob([dxf], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `rectangle-${width}-${height}.dxf`;
		a.click();

		URL.revokeObjectURL(url);
	};

	const toNumber = (val: string): number | '' =>
		val === '' ? '' : Number(val);

	const handleReset = () => {
		setWidth('');
		setHeight('');
	};

	return (
		<div>
			<Heading level={2}>Prostokąt</Heading>
			<FormRow htmlFor="width" label="Szerokość:">
				<Input
					id="width"
					type="number"
					min="0"
					value={width}
					onChange={(e) => {
						setWidth(toNumber(e.target.value));
					}}
				/>
			</FormRow>

			<FormRow htmlFor="height" label="Wysokość:">
				<Input
					id="height"
					type="number"
					min="0"
					value={height}
					onChange={(e) => {
						setHeight(toNumber(e.target.value));
					}}
				/>
			</FormRow>

			<AcadWrapper>
				<CanvasPreview width={width} height={height} />
			</AcadWrapper>

			<Button onClick={handleGenerate} disabled={width === '' || height === ''}>
				Pobierz DXF
			</Button>
			<Button
				variant="secondary"
				onClick={handleReset}
				disabled={width === '' && height === ''}>
				Wyczyść
			</Button>
		</div>
	);
}
