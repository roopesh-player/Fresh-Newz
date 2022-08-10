import React, { useState,useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles,setarticles] = useState([]);
  const [loading,setloading] = useState(true);
  const [totalArticles,settotalArticles] = useState(0);
  const [pageNo,setpageNo] = useState(1);
  const pageSize=12;
  const update = async () => {
    props.currProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?&category=${props.category}&country=in&apiKey=${props.mykey}&page=1&pageSize=${pageSize}`;
    let data= await fetch(url);
    let readableData=await data.json();
    props.currProgress(70);
    settotalArticles(readableData.totalResults);
    setarticles(readableData.articles);
    setloading(false);
    props.currProgress(100);
  }

  useEffect(() => {
    update();
    // eslint-disable-next-line
  },[])
const fetchMoreData = async() =>{
  let url=`https://newsapi.org/v2/top-headlines?&category=${props.category}&country=in&apiKey=${props.mykey}&page=${pageNo+1}&pageSize=${pageSize}`;
  let data= await fetch(url);
  let readableData=await data.json();
  setarticles(articles.concat(readableData.articles));
  setloading(false);
  setpageNo(pageNo+1);
}
    return (
      <>
      <div className="bg-secondary">
        <h1 className='text-center text-white' style={{paddingTop:'80px'}}>Fresh Newz - Top {props.category} headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalArticles!==articles.length}
          loader={<Spinner/>}
        >    
        <div className="container">    
        <div className=" row" >
        {!loading && articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title} description={element.description} urlToImage={element.urlToImage} newsUrl={element.url} sourceName={element.source.name} author={element.author}/>
            </div>
        })}
      </div>
      </div>
      </InfiniteScroll>
      </div>
      </>
    )
}
News.defaultProps ={
  category:"general"
}
News.propTypes ={
  category:PropTypes.string,
}
export default News
