'use client';

import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'outline' | 'danger';
};

export const Button = ({
	variant = 'primary',
	className,
	children,
	...props
}: ButtonProps) => {
	const baseStyles =
		'px-4 py-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mr-3 transition-colors';

	const variantStyles = {
		primary: 'bg-gray-800 text-white hover:bg-gray-700',
		secondary:
			'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
		outline:
			'border border-gray-400 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800',
		danger:
			'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
	};

	return (
		<button
			{...props}
			className={clsx(baseStyles, variantStyles[variant], className)}>
			{children}
		</button>
	);
};
