import { ReactNode } from "react";

interface FormStepProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function FormStep({ children, title, description }: FormStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-midnight mb-2">{title}</h2>
        {description && <p className="text-charcoal">{description}</p>}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
