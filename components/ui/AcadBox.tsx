'use client';

type AcadBoxProps = {
	children?: React.ReactNode;
};

export const AcadWrapper = ({ children }: AcadBoxProps) => (
	<div className="acad-bg p-4 mb-3 text-gray-100">{children}</div>
);
