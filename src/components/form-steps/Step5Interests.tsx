import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";
import CheckboxGroup from "../CheckboxGroup";

const INTEREST_OPTIONS = [
  { value: "theme-parks", label: "Theme Parks" },
  { value: "dining", label: "Fine Dining" },
  { value: "shows", label: "Shows & Entertainment" },
  { value: "shopping", label: "Shopping" },
  { value: "spa", label: "Spa & Relaxation" },
  { value: "adventure", label: "Adventure Activities" },
  { value: "photography", label: "Photography" },
  { value: "nightlife", label: "Nightlife" },
  { value: "water-parks", label: "Water Parks" },
  { value: "golf", label: "Golf" },
  { value: "sports", label: "Sports Events" },
  { value: "cultural", label: "Cultural Experiences" },
];

export default function Step5Interests({ data, updateData, errors }: FormStepProps) {
  return (
    <FormStep
      title="Interests"
      description="What activities interest you? Select all that apply."
    >
      <CheckboxGroup
        label="Select Your Interests *"
        options={INTEREST_OPTIONS}
        selectedValues={data.interests}
        onChange={(values) => updateData({ interests: values })}
        error={errors.interests}
      />
    </FormStep>
  );
}
