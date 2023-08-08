import React, { useState, useEffect } from 'react';
import octokit from '../utils/octokit';

function Calendar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataFromGitHub();
  }, []);

  const fetchDataFromGitHub = async () => {
    try {
      const response = await octokit.repos.getContent({
        owner: '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',
        repo: 'calendar-test',
        path: 'path/to/data.json'
      });

      // response.data에 GitHub 레포지토리의 데이터가 들어있습니다.
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data from GitHub:', error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Calendar">
      {/* 데이터를 활용한 UI 구성 */}
    </div>
  );
}

export default Calendar;
