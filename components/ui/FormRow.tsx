'use client';

type FormRowProps = {
	htmlFor?: string;
	label: string;
	children: React.ReactNode;
};

export const FormRow = ({ htmlFor, label, children }: FormRowProps) => (
	<div className="flex items-center justify-between mb-3">
		<label htmlFor={htmlFor}>{label}</label>
		{children}
	</div>
);
