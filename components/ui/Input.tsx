'use client';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = 'number', min = '0', ...props }: InputProps) => {
	return (
		<input
			type={type}
			min={min}
			{...props}
			className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
		/>
	);
};
