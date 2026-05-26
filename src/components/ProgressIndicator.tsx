interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium text-midnight">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/80">
        <div
          className="h-full bg-gold transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
