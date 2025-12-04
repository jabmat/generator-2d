'use client';

import { useState } from 'react';
import { FormRow } from './ui/FormRow';
import { Heading } from './ui/Heading';
import { Input } from './ui/Input';
import { AcadWrapper } from './ui/AcadBox';
import { Button } from './ui/Button';

type ParamConfig = {
	key: string;
	label: string;
	type?: string;
};

type FormGeneratorProps = {
	id: string;
	title: string;
	paramsConfig: ParamConfig[];
	generateFn: (...args: number[]) => string;
	onParamsChange?: (params: Record<string, number | ''>) => void;
	renderPreview?: (params: Record<string, number | ''>) => React.ReactNode;
};

export function FormGenerator({
	id,
	title,
	paramsConfig,
	onParamsChange,
	renderPreview,
	generateFn,
}: FormGeneratorProps) {
	const initialState: Record<string, number | ''> = Object.fromEntries(
		paramsConfig.map<[string, number | '']>((p) => [p.key, ''])
	);
	const [params, setParams] =
		useState<Record<string, number | ''>>(initialState);

	const toNumber = (val: string): number | '' =>
		val === '' ? '' : Number(val);

	const handleChange = (key: string, val: string) => {
		const newParams = { ...params, [key]: toNumber(val) };
		setParams(newParams);
		onParamsChange?.(newParams);
	};

	const disableDownload = Object.values(params).some((v) => v === '');
	const disableReset = Object.values(params).every((v) => v === '');

	const handleGenerate = () => {
		const values = paramsConfig.map((p) => params[p.key] as number);
		const dxf = generateFn(...values);
		const blob = new Blob([dxf], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `${id}-${values.join('-')}.dxf`;
		a.click();

		URL.revokeObjectURL(url);
	};

	const handleReset = () => {
		setParams(initialState);
	};

	return (
		<div id={id} className="mb-6">
			<Heading level={2}>{title}</Heading>
			{paramsConfig.map((p) => (
				<FormRow key={p.key} htmlFor={p.key} label={p.label}>
					<Input
						id={p.key}
						value={params[p.key]}
						onChange={(e) => handleChange(p.key, e.target.value)}
						type={p.type}></Input>
				</FormRow>
			))}
			{renderPreview && <AcadWrapper>{renderPreview(params)}</AcadWrapper>}
			<Button onClick={handleGenerate} disabled={disableDownload}>
				Pobierz DXF
			</Button>
			<Button variant="secondary" onClick={handleReset} disabled={disableReset}>
				Wyczyść
			</Button>
		</div>
	);
}
