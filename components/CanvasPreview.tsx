'use client';

import { useEffect, useRef } from 'react';

interface CanvasRectanglePreviewProps {
	width: number | '';
	height: number | '';
}

export function CanvasRectanglePreview({
	width,
	height,
}: CanvasRectanglePreviewProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Wyczyść canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Jeśli width/height są puste, nic nie rysujemy
		if (width === '' || height === '') return;

		const padding = 10;

		// maksymalne wymiary prostokąta, żeby zmieścił się w canvasie z paddingiem
		const maxWidth = canvas.width - 2 * padding;
		const maxHeight = canvas.height - 2 * padding;

		// Skalowanie, żeby zmieścić prostokąt w canvasie
		const scale = Math.min(maxWidth / width, maxHeight / height, 1);

		const rectWidth = width * scale;
		const rectHeight = height * scale;

		// Oblicz pozycję startową tak, aby prostokąt był wycentrowany
		const startX = (canvas.width - rectWidth) / 2;
		const startY = (canvas.height - rectHeight) / 2;

		// Styl jak w AutoCAD – tylko linia, bez wypełnienia
		ctx.strokeStyle = '#00FFFF'; // klasyczny CAD‑owy cyan
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.rect(startX, startY, rectWidth, rectHeight);
		ctx.stroke();
	}, [width, height]);

	return <canvas ref={canvasRef} width={300} height={300} className="m-auto" />;
}

interface CanvasCirclePreviewProps {
	diameter: number | '';
}

export function CanvasCirclePreview({ diameter }: CanvasCirclePreviewProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (diameter === '') return;

		const padding = 10;

		const radius = diameter / 2;
		const maxDiameter = Math.min(canvas.width, canvas.height) - 2 * padding;
		const scale = Math.min(maxDiameter / diameter, 1);
		const scaledRadius = radius * scale;

		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;

		ctx.strokeStyle = '#00FFFF';
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.arc(centerX, centerY, scaledRadius, 0, 2 * Math.PI);
		ctx.stroke();
	}, [diameter]);

	return <canvas ref={canvasRef} width={300} height={300} className="m-auto" />;
}
