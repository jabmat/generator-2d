'use client';

type HeadingProps = {
	level?: 1 | 2 | 3;
	children: React.ReactNode;
};

export const Heading = ({ level = 1, children }: HeadingProps) => {
	switch (level) {
		case 1:
			return (
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-200">
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className="text-lg font-medium text-gray-700 mb-2 dark:text-gray-300">
					{children}
				</h3>
			);
		default:
			return (
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					{children}
				</h1>
			);
	}
};
