import React from 'react';
import {connect} from 'react-redux';
import { getUserDetail } from "actions/UserList";
import ProfileCard from "components/ProfileCard";
import CustomLoader from "react-fullpage-custom-loader";
import IntlMessages from "util/IntlMessages";
import ReactTable from "react-table";


class UserDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetail: {
                phone_number: ''
            },
            loading: true
        }
    }

    componentDidMount(){
      //  console.log(this.props.match.params.phoneNumber);
        this.setState({
            ...this.state,
            userDetail: {
                ...this.state.userDetail,
                phone_number: this.props.match.params.phoneNumber
            }
        }, () => {
            this.props.getUserDetail(this.state.userDetail);
        })
    }

    componentWillReceiveProps(newProps) {
        this.setState({loading: newProps.user.loading})
    }

    displayData(loading)
    {
        if(loading)
        {
            return <CustomLoader loaderType="ball-scale-ripple-multiple" color="#0066f5" wrapperBackgroundColor="#f4f4f4"
                                 sentences={[]}/>
        }
        else
        {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 animation slideInRight">
                            <div className="sidebar">
                                <ProfileCard data={this.props.user.userDetail}/>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }

    }

    render(){
        return (
          <div className={'userDetail'}>

              {
                  this.displayData(this.state.loading)
              }

          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.userList
})


export default connect(mapStateToProps, {getUserDetail})(UserDetail);