import type { ContributionDay } from '../types';

export async function fetchGitHubContributions(): Promise<ContributionDay[]> {
  const username = 'jimi-117';
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  
  return weeks.flatMap(week => 
    week.contributionDays.map(day => ({
      date: day.date,
      count: day.contributionCount
    }))
  );
}