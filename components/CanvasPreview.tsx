'use client';

import { useEffect, useRef } from 'react';

interface CanvasPreviewProps {
	width: number | '';
	height: number | '';
}

export default function CanvasPreview({ width, height }: CanvasPreviewProps) {
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

		// Skalowanie, żeby zmieścić prostokąt w canvasie
		const scale = Math.min(canvas.width / width, canvas.height / height, 1);

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

	return <canvas ref={canvasRef} width={300} height={300} className='m-auto' />;
}
