import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";
import Link from "next/link";
import { checkboxClassName } from "./fieldStyles";

export default function Step7Consent({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep
      title="Consent & Submit"
      description="Review and agree to our terms to submit your request."
    >
      <div className="space-y-4">
        <div className="p-4 bg-cloud rounded-md">
          <h3 className="font-medium text-charcoal mb-2">Review Your Information</h3>
          <div className="text-sm text-charcoal space-y-1">
            <p>
              <strong>Name:</strong> {data.firstName} {data.lastName}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Destination:</strong> {data.destination}
            </p>
            <p>
              <strong>Travelers:</strong> {data.adults} adult(s)
              {data.children > 0 && `, ${data.children} child(ren)`}
            </p>
            <p>
              <strong>Budget:</strong> ${data.budgetMin.toLocaleString()} - $
              {data.budgetMax.toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => updateData({ consent: e.target.checked })}
              className={checkboxClassName}
              required
            />
            <span className="text-sm text-charcoal">
              I agree to the{" "}
              <Link href="/terms-of-service" className="text-royal hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-royal hover:underline">
                Privacy Policy
              </Link>
              . I consent to being contacted by The Midnight Travel Co. regarding my travel
              inquiry. *
            </span>
          </label>
          {errors.consent && <p className="text-sm text-accent mt-1">{errors.consent}</p>}
        </div>
      </div>
    </FormStep>
  );
}
