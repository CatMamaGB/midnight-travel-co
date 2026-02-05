interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium text-charcoal">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="mt-2 h-2 w-full bg-cloud rounded-full overflow-hidden">
        <div
          className="h-full bg-royal transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
