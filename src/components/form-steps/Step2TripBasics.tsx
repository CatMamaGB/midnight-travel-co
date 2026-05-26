import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";
import { fieldClassName } from "./fieldStyles";

export default function Step2TripBasics({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep title="Trip Basics" description="Tell us about your travel plans.">
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-charcoal mb-2">
          Destination *
        </label>
        <input
          type="text"
          id="destination"
          value={data.destination}
          onChange={(e) => updateData({ destination: e.target.value })}
          className={fieldClassName}
          placeholder="e.g., Walt Disney World, Universal Studios"
          required
        />
        {errors.destination && <p className="text-sm text-accent mt-1">{errors.destination}</p>}
      </div>

      <div>
        <label htmlFor="tripType" className="block text-sm font-medium text-charcoal mb-2">
          Trip Type *
        </label>
        <select
          id="tripType"
          value={data.tripType}
          onChange={(e) => updateData({ tripType: e.target.value })}
          className={fieldClassName}
          required
        >
          <option value="">Select trip type</option>
          <option value="family">Family Vacation</option>
          <option value="romantic">Romantic Getaway</option>
          <option value="adventure">Adventure</option>
          <option value="relaxation">Relaxation</option>
          <option value="celebration">Celebration</option>
          <option value="other">Other</option>
        </select>
        {errors.tripType && <p className="text-sm text-accent mt-1">{errors.tripType}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-charcoal mb-2">
            Start Date *
          </label>
          <input
            type="date"
            id="startDate"
            value={data.startDate}
            onChange={(e) => updateData({ startDate: e.target.value })}
            className={fieldClassName}
            required
          />
          {errors.startDate && <p className="text-sm text-accent mt-1">{errors.startDate}</p>}
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-charcoal mb-2">
            End Date *
          </label>
          <input
            type="date"
            id="endDate"
            value={data.endDate}
            onChange={(e) => updateData({ endDate: e.target.value })}
            min={data.startDate}
            className={fieldClassName}
            required
          />
          {errors.endDate && <p className="text-sm text-accent mt-1">{errors.endDate}</p>}
        </div>
      </div>
    </FormStep>
  );
}
