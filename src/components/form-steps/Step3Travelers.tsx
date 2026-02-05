import { FormStepProps } from "@/types/form";
import FormStep from "../FormStep";

export default function Step3Travelers({ data, updateData, errors }: FormStepProps) {
  const handleAdultsChange = (value: number) => {
    updateData({ adults: Math.max(1, value) });
  };

  const handleChildrenChange = (value: number) => {
    const newChildren = Math.max(0, value);
    const newChildAges = data.childAges.slice(0, newChildren);
    // Fill with empty ages if needed
    while (newChildAges.length < newChildren) {
      newChildAges.push(0);
    }
    updateData({ children: newChildren, childAges: newChildAges });
  };

  const handleChildAgeChange = (index: number, age: number) => {
    const newChildAges = [...data.childAges];
    newChildAges[index] = age;
    updateData({ childAges: newChildAges });
  };

  return (
    <FormStep title="Travelers" description="How many people are traveling?">
      <div>
        <label htmlFor="adults" className="block text-sm font-medium text-charcoal mb-2">
          Number of Adults *
        </label>
        <input
          type="number"
          id="adults"
          value={data.adults}
          onChange={(e) => handleAdultsChange(parseInt(e.target.value) || 1)}
          min="1"
          className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal"
          required
        />
        {errors.adults && <p className="text-sm text-accent mt-1">{errors.adults}</p>}
      </div>

      <div>
        <label htmlFor="children" className="block text-sm font-medium text-charcoal mb-2">
          Number of Children
        </label>
        <input
          type="number"
          id="children"
          value={data.children}
          onChange={(e) => handleChildrenChange(parseInt(e.target.value) || 0)}
          min="0"
          className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal"
        />
        {errors.children && <p className="text-sm text-accent mt-1">{errors.children}</p>}
      </div>

      {data.children > 0 && (
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Child Ages * (Required for each child)
          </label>
          <div className="space-y-3">
            {Array.from({ length: data.children }).map((_, index) => (
              <div key={index}>
                <label className="block text-sm text-charcoal mb-1">
                  Child {index + 1} Age
                </label>
                <input
                  type="number"
                  value={data.childAges[index] || ""}
                  onChange={(e) =>
                    handleChildAgeChange(index, parseInt(e.target.value) || 0)
                  }
                  min="0"
                  max="17"
                  className="w-full px-4 py-2 border border-silver rounded-md focus:ring-royal focus:border-royal"
                  placeholder="Enter age"
                  required
                />
              </div>
            ))}
          </div>
          {errors.childAges && (
            <p className="text-sm text-accent mt-1">{errors.childAges}</p>
          )}
        </div>
      )}
    </FormStep>
  );
}
