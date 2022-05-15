import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Information from '../components/Information/Information';
import RepoBar from '../components/RepoBar/RepoBar';
import RepoList from '../components/RepoList/RepoList';

const Repository = () => {

    const {name} = useParams();

    const [repo,setRepo] = useState({});

    const getRepo = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${name}`);
        console.log(res.data);
        if(res.status === 200)
        {
          setRepo(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getRepo();
    },[]);

  return (
    <div>
      <Information avatar={repo.avatar_url} 
      name={repo.login}
      bio={repo.bio}
      blog={repo.blog}
      location = {repo.location}
      twitter={repo.twitter_username}
      profile={repo.html_url}/>
      <RepoBar 
      followers={repo.followers}
      following={repo.following}
      no_repo={repo.public_repos}/>
      <RepoList user={name} />
    </div>
  )
}

export default Repository