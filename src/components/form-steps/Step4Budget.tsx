import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";

export default function Step4Budget({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep
      title="Budget Range"
      description="What's your budget range? (Minimum $1,000)"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budgetMin" className="block text-sm font-medium text-charcoal mb-2">
            Minimum Budget ($) *
          </label>
          <input
            type="number"
            id="budgetMin"
            value={data.budgetMin}
            onChange={(e) => updateData({ budgetMin: parseInt(e.target.value) || 1000 })}
            min="1000"
            step="100"
            className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal"
            required
          />
          {errors.budgetMin && <p className="text-sm text-accent mt-1">{errors.budgetMin}</p>}
        </div>

        <div>
          <label htmlFor="budgetMax" className="block text-sm font-medium text-charcoal mb-2">
            Maximum Budget ($) *
          </label>
          <input
            type="number"
            id="budgetMax"
            value={data.budgetMax}
            onChange={(e) => updateData({ budgetMax: parseInt(e.target.value) || 5000 })}
            min={data.budgetMin}
            step="100"
            className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal"
            required
          />
          {errors.budgetMax && <p className="text-sm text-accent mt-1">{errors.budgetMax}</p>}
        </div>
      </div>

      <div className="mt-4 p-4 bg-cloud rounded-md">
        <p className="text-sm text-charcoal">
          Budget Range: ${data.budgetMin.toLocaleString()} - ${data.budgetMax.toLocaleString()}
        </p>
      </div>
    </FormStep>
  );
}
