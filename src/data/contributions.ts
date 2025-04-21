import type { ContributionDay } from '../types';

// Generate mock contribution data (in a real site, this would come from GitHub API)
const generateContributions = (): ContributionDay[] => {
  const contributions: ContributionDay[] = [];
  const today = new Date();
  const dayCount = 365; // for a year's worth of contributions
  
  for (let i = 0; i < dayCount; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (dayCount - i));
    
    const dateString = date.toISOString().split('T')[0];
    const randomActivity = Math.floor(Math.random() * 5); // 0-4 contributions per day
    
    contributions.push({
      date: dateString,
      count: randomActivity
    });
  }
  
  return contributions;
};

export const contributionData = generateContributions();