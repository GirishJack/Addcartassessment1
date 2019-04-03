import React,{Component} from 'react';

export default class Details extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                 {/* <div>
                 <img src={} /></div>
                    <h2></h2>
                    <p></p> */}


                     <div className="card">
                <img src={this.props.details.mediumImage} alt="Avatar" />
                <div className="container">
                <h4>Name:{this.props.details.name}</h4>
                <p className=""><b>ItemId:- {this.props.details.itemId}</b></p> 
                <p className=""><b>Price:  ${this.props.details.salePrice}</b></p> 
                <button type="button" className="t-b f-l m-t" onClick={()=>this.props.add()}>Add To Cart</button> 
                <button type="button"  className="t-b f-r m-t"  onClick={()=>this.props.delete()}>Delete Cart</button> 
                </div>
            </div><br/><br/>

           
            </div>
          
        )
    }
}