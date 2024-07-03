import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
       let {title, description,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl? "https://image.cnbcfm.com/api/v1/image/107414671-1715697985882-gettyimages-2152909503-wallstl424104_8kq7yqbm.jpeg?v=1718656728&w=1920&h=1080": imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btm-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
