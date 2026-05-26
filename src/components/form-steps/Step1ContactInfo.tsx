import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";
import { fieldClassName } from "./fieldStyles";

export default function Step1ContactInfo({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep title="Contact Information" description="Let's start with your contact details.">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          value={data.firstName}
          onChange={(e) => updateData({ firstName: e.target.value })}
          className={fieldClassName}
          required
        />
        {errors.firstName && <p className="text-sm text-accent mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          value={data.lastName}
          onChange={(e) => updateData({ lastName: e.target.value })}
          className={fieldClassName}
          required
        />
        {errors.lastName && <p className="text-sm text-accent mt-1">{errors.lastName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className={fieldClassName}
          required
        />
        {errors.email && <p className="text-sm text-accent mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          className={fieldClassName}
          placeholder="(555) 123-4567"
          required
        />
        {errors.phone && <p className="text-sm text-accent mt-1">{errors.phone}</p>}
      </div>
    </FormStep>
  );
}
