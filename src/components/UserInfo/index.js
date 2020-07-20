import React from 'react';
import {connect} from 'react-redux'
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

class UserInfo extends React.Component {
    state = {
        userInfo: {}
    }

    componentDidMount(){
        const userInfo = JSON.parse(localStorage.getItem('user'));
         this.setState({...this.state.userInfo, userInfo}, () => {
             console.log(this.state);
         })
    }

    render() {
        return (
            <div>
                <div className="user-profile">
                    <img className="user-avatar border-0 size-40" src="http://via.placeholder.com/150x150"
                         alt="User"/>
                        <div className="user-detail ml-2">
                            <h4 className="user-name mb-0">{this.state.userInfo.last_name} {this.state.userInfo.other_names}</h4>
                            <small>{this.state.userInfo.user_category}</small>
                        </div>
                </div>
                    <a className="dropdown-item text-muted" href="javascript:void(0)" onClick={() => {
                        console.log("Try to logoput");
                        this.props.userSignOut()
                    }}>
                        <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1"/>
                        <IntlMessages id="popup.logout"/>
                    </a>
            </div>
        );
    }
}

export default connect(null, {userSignOut})(UserInfo);


