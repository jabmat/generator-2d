'use client';

type InputProps = {
	id?: string;
	type?: string;
	min?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, min, value, id, onChange }: InputProps) => {
	return (
		<input
			id={id}
			type={type}
			min={min}
			value={value}
			onChange={onChange}
			className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
		/>
	);
};
