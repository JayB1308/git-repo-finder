import React,{useState,useEffect,useMemo} from 'react'
import "./RepoList.css";
import Repo from '../Repo/Repo';
import axios from 'axios';
import Pagination from '../pagination/Pagination';
import Loader from "../loader/Loader";
const RepoList = ({user}) => {

    const [repoList,setRepoList] = useState([]);

    const [isLoading,setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; 
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return repoList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage,repoList,pageSize]);
    
    const getAllRepos = async () => {
        try {
            const res = await axios.get(`https://api.github.com/users/${user}/repos`);
            console.log(res);
            setRepoList(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllRepos();
    },[]);

  return (
    <>
    {isLoading ? <Loader /> : ""}
   <div className="repo-list">
        {
            currentTableData.map((repo) => {
                return(
                    <Repo name={repo.name} desc={repo.description} language={repo.language}/>
                )
            })
        }
   </div>
   <Pagination 
   currentPage={currentPage}
   totalCount={repoList.length}
   pageSize={pageSize}
   onPageChange={page => setCurrentPage(page)}/>
   </>
  )
}

export default RepoList