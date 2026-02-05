import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";

export default function Step6Vision({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep
      title="Your Vision"
      description="Tell us about your dream trip. What makes it special?"
    >
      <div>
        <label htmlFor="vision" className="block text-sm font-medium text-charcoal mb-2">
          Share Your Vision *
        </label>
        <textarea
          id="vision"
          value={data.vision}
          onChange={(e) => updateData({ vision: e.target.value })}
          rows={6}
          className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal resize-none"
          placeholder="Describe your ideal trip, special occasions, must-see attractions, or any specific requests..."
          required
        />
        {errors.vision && <p className="text-sm text-accent mt-1">{errors.vision}</p>}
      </div>
    </FormStep>
  );
}
