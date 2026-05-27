"use client";

import { useMemo, useState } from "react";

const destinationMultipliers = {
  disneyWorld: 1.15,
  disneyland: 1.05,
  universalOrlando: 1,
  universalHollywood: 1.1,
} as const;

const travelStyleMultipliers = {
  value: 1,
  moderate: 1.25,
  premium: 1.65,
} as const;

const partyTypeMultipliers = {
  adultsOnly: 1.1,
  family: 1,
  group: 0.95,
} as const;

export default function BudgetEstimator() {
  const [nights, setNights] = useState(5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [destination, setDestination] = useState<keyof typeof destinationMultipliers>("disneyWorld");
  const [travelStyle, setTravelStyle] = useState<keyof typeof travelStyleMultipliers>("moderate");
  const [partyType, setPartyType] = useState<keyof typeof partyTypeMultipliers>("family");

  const estimate = useMemo(() => {
    const travelerWeight = adults + children * 0.75;
    const nightlyBase = 260;
    const subtotal =
      travelerWeight *
      nights *
      nightlyBase *
      destinationMultipliers[destination] *
      travelStyleMultipliers[travelStyle] *
      partyTypeMultipliers[partyType];

    const low = Math.round(subtotal * 0.88);
    const high = Math.round(subtotal * 1.18);

    return { low, high };
  }, [adults, children, destination, nights, partyType, travelStyle]);

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-2 text-2xl font-semibold text-midnight">Trip Budget Calculator</h2>
      <p className="mb-8 leading-7 text-charcoal/80">
        Use this quick estimator to set a practical planning range. Final quotes vary by season,
        resort inventory, and active promotions.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-charcoal">
          Nights
          <input
            type="number"
            min={2}
            max={14}
            value={nights}
            onChange={(event) => setNights(Number(event.target.value))}
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-charcoal">
          Adults
          <input
            type="number"
            min={1}
            max={10}
            value={adults}
            onChange={(event) => setAdults(Number(event.target.value))}
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-charcoal">
          Children
          <input
            type="number"
            min={0}
            max={10}
            value={children}
            onChange={(event) => setChildren(Number(event.target.value))}
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-charcoal">
          Destination
          <select
            value={destination}
            onChange={(event) =>
              setDestination(event.target.value as keyof typeof destinationMultipliers)
            }
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          >
            <option value="disneyWorld">Walt Disney World</option>
            <option value="disneyland">Disneyland</option>
            <option value="universalOrlando">Universal Orlando</option>
            <option value="universalHollywood">Universal Hollywood</option>
          </select>
        </label>

        <label className="text-sm font-medium text-charcoal">
          Travel Style
          <select
            value={travelStyle}
            onChange={(event) =>
              setTravelStyle(event.target.value as keyof typeof travelStyleMultipliers)
            }
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          >
            <option value="value">Value</option>
            <option value="moderate">Moderate</option>
            <option value="premium">Premium</option>
          </select>
        </label>

        <label className="text-sm font-medium text-charcoal">
          Party Type
          <select
            value={partyType}
            onChange={(event) => setPartyType(event.target.value as keyof typeof partyTypeMultipliers)}
            className="mt-2 w-full rounded-md border border-silver/50 px-3 py-2"
          >
            <option value="family">Family</option>
            <option value="adultsOnly">Adults Only</option>
            <option value="group">Group</option>
          </select>
        </label>
      </div>

      <div className="mt-8 rounded-xl bg-midnight px-6 py-5 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">Estimated range</p>
        <p className="mt-2 text-3xl font-semibold">
          ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
