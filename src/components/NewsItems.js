import React from 'react'
import tempImage from './temp.png'
const NewsItems = (props) => {
    let {title,description,urlToImage,newsUrl,sourceName,author} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndez:'1'}}>{sourceName}</span>
        </div>
        <img src={urlToImage?urlToImage:tempImage} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read full article</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItems
