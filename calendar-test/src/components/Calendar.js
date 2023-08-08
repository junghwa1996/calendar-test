// src/components/Calendar.js
import React from 'react';
import octokit from '../utils/octokit';

function Calendar() {
  const fetchDataFromGitHub = async () => {
    try {
      const response = await octokit.repos.getContent({
        owner: 'YOUR_GITHUB_USERNAME',
        repo: 'YOUR_REPO_NAME',
        path: 'path/to/data.json'
      });

      // response.data에 GitHub 레포지토리의 데이터가 들어있습니다.
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data from GitHub:', error);
    }
  };

  return (
    <div className="Calendar">
      <button onClick={fetchDataFromGitHub}>Fetch Data from GitHub</button>
    </div>
  );
}

export default Calendar;
