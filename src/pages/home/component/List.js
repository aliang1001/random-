import React,{ PureComponent } from "react";
import { ListItem,ListInfo,LoadMore } from '../style'
import {connect} from 'react-redux';
import { actioncreators } from './store'
import { Link} from 'react-router-dom'
class List extends PureComponent{
  render(){
    return (
      <div>
        {
          this.props.list.map((item,index)=>{
            return (
              <Link key={index} to={'/detail ' + item.get('id')}>
              <ListItem key={index}>
              <img alt='' className="pic" src={item.get('imgUrl')} />
              <ListInfo>
                  <h4 className='title'>{item.get('title')}</h4>
                  <p className='desc'>{item.get('desc')}</p>
              </ListInfo> 
            </ListItem>
            </Link>
            )
          })
        }
        <LoadMore onClick={()=>this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage']),
})
const mapDispatch = (dispatch)=>({
  getMoreList(page){
    dispatch(actioncreators.getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List)