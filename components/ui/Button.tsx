'use client';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	onClick?: () => void;
};

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
			{children}
		</button>
	);
};
