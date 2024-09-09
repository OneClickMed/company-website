import React from 'react';

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string; // Add a className prop
}

const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children, required = false, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-xl text-gray-700 ${className}`}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
