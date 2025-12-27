'use client';

import { useState, useCallback } from 'react'; // Importujemy useCallback
import DxfForm from '@/components/DxfForm';
import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';

export default function Home() {
	const [allParams, setAllParams] = useState<Record<string, number | ''>>({});

	// Używamy useCallback, aby funkcja nie była tworzona na nowo przy każdym renderze
	const handleAllParamsChange = useCallback(
		(params: Record<string, number | ''>) => {
			setAllParams(params);
		},
		[] // Pusta tablica zależności oznacza, że funkcja zostanie stworzona tylko raz
	);

	return (
		<>
			<header className="p-4 text-center">
				<Heading>DXF Generator (R12)</Heading>
			</header>
			<main className="container-width m-auto p-4 flex-1">
				<DxfForm onAllParamsChange={handleAllParamsChange} />
			</main>
			<footer className="p-4 text-center text-sm text-neutral-500 border-t border-gray-300">
				<div className="mb-2">
					<p className="font-bold">Live Params:</p>
					<pre className="text-xs bg-gray-100 p-2 rounded">
						{JSON.stringify(allParams, null, 2)}
					</pre>
				</div>
				<div className="mb-1">M. Jabłoński</div>
				<div>Wszystkie prawa zastrzeżone</div>
			</footer>
		</>
	);
}
