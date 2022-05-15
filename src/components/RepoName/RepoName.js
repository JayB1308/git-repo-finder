import React,{useState} from 'react'
import "./RepoName.css";
import { useNavigate } from 'react-router-dom';
const RepoName = () => {

    let navigate = useNavigate();

    const [repoName,setRepoName] = useState("");

    const handleSubmit = () => {
        navigate(`/${repoName}`);
    }

  return (
    <div className="name-container">
        <label>Repo:</label>
        <input type="text" placeholder='Enter a repo name..' 
        value={repoName}
        onChange={(e) => {setRepoName(e.target.value)}}/>
        <button onClick={handleSubmit}>Find Repo</button>
    </div>
  )
}

export default RepoName