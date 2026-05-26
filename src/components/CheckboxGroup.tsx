import { checkboxClassName } from "./form-steps/fieldStyles";

interface CheckboxGroupProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  error?: string;
}

export default function CheckboxGroup({
  label,
  options,
  selectedValues,
  onChange,
  error,
}: CheckboxGroupProps) {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-charcoal">{label}</label>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              className={checkboxClassName}
            />
            <span className="text-sm text-charcoal">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-sm text-accent mt-1">{error}</p>}
    </div>
  );
}
