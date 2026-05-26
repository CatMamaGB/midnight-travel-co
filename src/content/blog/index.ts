import { bestDisneyAndUniversalDestinationsForEveryTypeOfTraveler } from "./best-disney-and-universal-destinations-for-every-type-of-traveler";
import { howToPlanALowStressDisneyTripForFamiliesWithYoungKids } from "./how-to-plan-a-low-stress-disney-trip-for-families-with-young-kids";
import { whenToUseATravelAdvisorForGroupAndCelebrationTravel } from "./when-to-use-a-travel-advisor-for-group-and-celebration-travel";
import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  bestDisneyAndUniversalDestinationsForEveryTypeOfTraveler,
  howToPlanALowStressDisneyTripForFamiliesWithYoungKids,
  whenToUseATravelAdvisorForGroupAndCelebrationTravel,
].sort((firstPost, secondPost) =>
  secondPost.publishedAt.localeCompare(firstPost.publishedAt)
);
