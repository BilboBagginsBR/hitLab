import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileRepos } from '../../actions/selectors';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username }: { username: string }) => {
  const dispatch = useDispatch();
  const repos = useSelector(getProfileRepos);
  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [getGithubRepos, username]);

  return (
    <div>
      <h2>Github Repos</h2>
      {repos.map((repo: any) => (
        <div key={repo.id}>
          <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li>Stars: {repo.stargazers_count}</li>
              <li>Watchers: {repo.watchers_count}</li>
              <li>Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileGithub;
