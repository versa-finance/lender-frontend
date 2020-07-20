import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import Spinner from '../components/Spinner';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn,
    clearMsg
} from 'actions/Auth';
import CircularProgress from 'components/CircularProgress'
import LOGO from 'assets/images/logowhite.png';

class SignIn extends React.Component {
    constructor () {
        super ();
        this.state = {
            phone_number: '',
            password: '',
            required: false,
            clickEvent: false
        }
    }

    componentDidMount(){
        this.props.clearMsg('alertMessage');
    }

    componentDidUpdate () {
        if (this.props.showMessage) {
            setTimeout (() => {
                this.props.hideMessage ();
            }, 100);
        }
        if (this.props.authUser !== null) {
            this.props.history.push ('/');
        }
    }

    submit (e) {
        e.preventDefault();
        this.setState({...this.state, clickEvent: true}, () => {

            if(this.state.password === '' || this.state.phone_number === ''){
                ToastsStore.error('Some required field* are empty');
                this.setState({...this.state, required: true, clickEvent: false})

            }else{
                this.props.userSignIn(this.state, this.props.history);
               // this.setState({...this.state, clickEvent: false})
            }

        });




    };

    render () {
        const {
            email,
            password
        } = this.state;
        const { showMessage, loader, alertMessage } = this.props;


        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>

                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Lender">
                            <img src={LOGO} alt="Lender" title="Lender" />
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header mb-4">
                            <h1><IntlMessages id="admin.login.name" /></h1>
                        </div>

                        <div className={'requiredField'}>
                            {alertMessage ? alertMessage : ''}
                        </div>

                        <div className={'requiredField'}>
                            {this.state.required ? '* Field are required' : ''}
                        </div>

                        <div className="app-login-form">
                                <div className="form-group mb-3">
                                    <input
                                        placeholder="Phone Number *"
                                        onChange={(event) => this.setState ({ phone_number: event.target.value, required: false })}
                                        defaultValue={email}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        placeholder="Password *"
                                        onChange={(event) => this.setState ({ password: event.target.value, required: false })}
                                        defaultValue={password}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                            {this.state.clickEvent ? 'Please wait...' : ''}

                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <button disabled={this.state.clickEvent ? 'disabled': null}  onClick={(event) =>
                                        this.submit(event)} className={"text-uppercase btn btn-primary"}
                                            style={{backgroundColor: '#0066f5'}}>Sign in
                                    </button>

                                    {/* <Button onClick={() => {
                                        this.props.showAuthLoader ();
                                         (event) => this.submit(event);
                                    }} color="primary" className="text-uppercase">
                                        <IntlMessages id="appModule.signIn" />
                                    </Button>*/}

                                    <Link to="/signup">
                                        <IntlMessages id="signIn.signUp" />
                                    </Link>
                                </div>

                            {/*<div className="app-social-block my-1 my-sm-3">*/}
                                {/*<IntlMessages*/}
                                    {/*id="signIn.connectWith" />*/}
                            {/*</div>*/}

                        </div>
                    </div>

                </div>
                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress />
                    </div>
                }
                {showMessage && NotificationManager.error (alertMessage)}
                <NotificationContainer />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect (mapStateToProps, {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn,
    clearMsg
}) (SignIn);
