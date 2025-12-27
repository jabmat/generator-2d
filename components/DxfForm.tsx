'use client';

import { useState } from 'react';
import { generateCircleDXF, generateRectangleDXF } from '@/lib/dxfGenerator';
import {
	CanvasCirclePreview,
	CanvasRectanglePreview,
} from '@/components/CanvasPreview';
import { FormGenerator } from './FormGenerator';

// Definiujemy początkowe, puste stany dla formularzy
// Z JAWNĄ ADNOTACJĄ TYPU, aby TypeScript wiedział, czego się spodziewać
const initialRectangleParams: Record<string, number | ''> = {
	width: '',
	height: '',
};
const initialCircleParams: Record<string, number | ''> = { diameter: '' };

export default function DxfForm() {
	// Tworzymy stany dla parametrów prostokąta i okręgu
	const [rectangleParams, setRectangleParams] = useState(
		initialRectangleParams
	);
	const [circleParams, setCircleParams] = useState(initialCircleParams);

	// Funkcja do globalnego resetowania obu formularzy
	const handleGlobalReset = () => {
		setRectangleParams(initialRectangleParams);
		setCircleParams(initialCircleParams);
	};

	// Sprawdzamy, czy jakiekolwiek pole w którymkolwiek formularzu jest wypełnione
	const isAnythingFilled =
		Object.values(rectangleParams).some((value) => value !== '') ||
		Object.values(circleParams).some((value) => value !== '');

	return (
		<div>
			<FormGenerator
				id="rectangle"
				title="Prostokąt"
				paramsConfig={[
					{ key: 'width', label: 'Szerokość:' },
					{ key: 'height', label: 'Wysokość:' },
				]}
				renderPreview={(params) => (
					<CanvasRectanglePreview width={params.width} height={params.height} />
				)}
				generateFn={generateRectangleDXF}
				params={rectangleParams}
				setParams={setRectangleParams}
				// Nowe propsy do obsługi przycisków
				onClear={() => setRectangleParams(initialRectangleParams)}
				onGlobalReset={handleGlobalReset}
				isAnythingFilled={isAnythingFilled}
			/>
			<FormGenerator
				id="circle"
				title="Okrąg"
				paramsConfig={[{ key: 'diameter', label: 'Średnica:' }]}
				renderPreview={(params) => (
					<CanvasCirclePreview diameter={params.diameter} />
				)}
				generateFn={generateCircleDXF}
				params={circleParams}
				setParams={setCircleParams}
				// Nowe propsy do obsługi przycisków
				onClear={() => setCircleParams(initialCircleParams)}
				onGlobalReset={handleGlobalReset}
				isAnythingFilled={isAnythingFilled}
			/>
		</div>
	);
}
