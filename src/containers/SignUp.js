import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignUp,
    userTwitterSignIn,
    clearMsg
} from 'actions/Auth';

import CircularProgress from 'components/CircularProgress';
import LOGO from 'assets/images/logowhite.png';

/* const SignUp = ({ showMessage, loader, alertMessage, clearMsg, userSignUp }) => {
    const [userData, setUserData] = useState(
        {user: {
            last_name: '',
            other_names: '',
            password: '',
            email: '',
            gender: '',
            phone_number: '',
            user_category: 'Admin',
        },
        required: false,
        clickEvent: false}
    );

    useEffect(() => {
        clearMsg('alertMessage');
        userSignUp(userData.user);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        setUserData({...userData, clickEvent: true}, () => {

            if(userData.user.last_name === '' || userData.user.other_names === '' || userData.user.password === '' ||  userData.user.gender === '' || userData.user.phone_number === ''){
                setUserData({required: true, clickEvent: false});
            } else {
                userSignUp(userData.user);
                clearMsg('alertMessage');
            }
        });
    }

    const changeValue = (e) => {
        clearMsg('alertMessage');
        setUserData({
            userData,
            required: false,
            user: {
                ...userData.user,
                [e.target.name]: e.target.value
            }
        });
    }
        
    const { name, email, password } = userData;
    return (
        <div
            className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="app-login-main-content">
                <div className="app-logo-content d-flex align-items-center justify-content-center">
                    <Link className="logo-lg" to="/" title="Lender">
                        <img src={LOGO} alt="Lender" title="Lender" />
                    </Link>
                </div>

                <div className="app-login-content">
                    <div className="app-login-header">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="mb-4">
                        <h2><IntlMessages id="appModule.createAccount" /></h2>
                    </div>

                    <div className="app-login-form">
                        <div className={'requiredField'}>
                            {alertMessage ? alertMessage : ''}
                        </div>

                        <div className={'requiredField'}>
                        {userData.required ? '* Field are required': ''}
                        </div>

                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    placeholder="Last Name *"
                                    name={'last_name'}
                                    onChange={(event) => changeValue(event)}
                                    defaultValue={name}
                                    className="form-control form-control-lg"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    placeholder="Other Name *"
                                    name={'other_names'}
                                    onChange={(event) => changeValue(event)}
                                    defaultValue={name}
                                    className="form-control form-control-lg"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    placeholder="Phone Number *"
                                    name={'phone_number'}
                                    onChange={(event) => changeValue(event)}
                                    defaultValue={name}
                                    className="form-control form-control-lg"
                                />
                            </div>



                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    name={'email'}
                                    onChange={(event) => changeValue(event)}
                                    placeholder="Email *"
                                    defaultValue={email}
                                    className="form-control form-control-lg"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    name={'password'}
                                    onChange={(event) => changeValue(event)}
                                    placeholder="Password *"
                                    defaultValue={password}
                                    className="form-control form-control-lg"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input type="radio" id={'male'} name="gender" value={"Male"} onChange={(event) => changeValue(event)}/>
                                <label htmlFor="male">Male *</label>

                                <input  id={'female'} type="radio" name="gender" value={"Female"} onChange={(event) => changeValue(event)}/>
                                <label htmlFor="female">Female *</label>
                            </div>

                        {userData.clickEvent ? 'Please wait...' : ''}


                        <div className="mb-3 d-flex align-items-center justify-content-between">
                                <button disabled={userData.clickEvent ? 'disabled': null}
                                        onClick={(event) => submit(event)} className={"text-uppercase btn btn-primary"}
                                        style={{backgroundColor: '#0066f5'}}>Register</button>
                                <Link to="/signin">
                                    <IntlMessages id="signUp.alreadyMember" />
                                </Link>
                        </div>
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
    )
}  */
class SignUp extends React.Component {
    constructor () {
        super ();
        this.state = {
            user: {
                last_name: '',
                other_names: '',
                password: '',
                email: '',
                gender: '',
                phone_number: '',
                user_category: 'Admin',
            },
            required: false,
            clickEvent: false
        };
    }

    componentDidMount(){
        this.props.clearMsg('alertMessage');
    }

   /* componentDidUpdate () {
        if (this.props.showMessage) {
            setTimeout (() => {
                this.props.hideMessage ();
            }, 3000);
        }
        if (this.props.authUser !== null) {
            this.props.history.push ('/');
        }
    }*/

    submit(e) {
        e.preventDefault();
        this.setState({...this.state, clickEvent: true}, () => {

            if(this.state.user.last_name === '' || this.state.user.other_names === '' || this.state.user.password === '' ||  this.state.user.gender === '' || this.state.user.phone_number === ''){
                this.setState({required: true, clickEvent: false});
            } else {
                this.props.userSignUp(this.state.user);
                this.props.clearMsg('alertMessage');
            }
        });
    }

    changeValue(e){
        this.props.clearMsg('alertMessage');
        this.setState({
            ...this.state,
            required: false,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    render () {
        const {
            name,
            email,
            password
        } = this.state;
        const { showMessage, loader, alertMessage } = this.props;
        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">
                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Lender">
                            <img src={LOGO} alt="Lender" title="Lender" />
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header">
                            <h1>Sign Up</h1>
                        </div>

                        <div className="mb-4">
                            <h2><IntlMessages id="appModule.createAccount" /></h2>
                        </div>

                        <div className="app-login-form">
                            <div className={'requiredField'}>
                                {alertMessage ? alertMessage : ''}
                            </div>

                            <div className={'requiredField'}>
                            {this.state.required ? '* Field are required': ''}
                            </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Last Name *"
                                        name={'last_name'}
                                        onChange={(event) => this.changeValue(event)}
                                        defaultValue={name}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Other Name *"
                                        name={'other_names'}
                                        onChange={(event) => this.changeValue(event)}
                                        defaultValue={name}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Phone Number *"
                                        name={'phone_number'}
                                        onChange={(event) => this.changeValue(event)}
                                        defaultValue={name}
                                        className="form-control form-control-lg"
                                    />
                                </div>



                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        name={'email'}
                                        onChange={(event) => this.changeValue(event)}
                                        placeholder="Email *"
                                        defaultValue={email}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        name={'password'}
                                        onChange={(event) => this.changeValue(event)}
                                        placeholder="Password *"
                                        defaultValue={password}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input type="radio" id={'male'} name="gender" value={"Male"} onChange={(event) => this.changeValue(event)}/>
                                    <label htmlFor="male">Male *</label>

                                    <input  id={'female'} type="radio" name="gender" value={"Female"} onChange={(event) => this.changeValue(event)}/>
                                    <label htmlFor="female">Female *</label>
                                </div>

                            {this.state.clickEvent ? 'Please wait...' : ''}


                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <button disabled={this.state.clickEvent ? 'disabled': null}
                                            onClick={(event) => this.submit(event)} className={"text-uppercase btn btn-primary"}
                                            style={{backgroundColor: '#0066f5'}}>Register</button>
                                   {/* <Button onClick={() => {this.submit}} color="primary" className="text-uppercase">
                                        <IntlMessages
                                            id="appModule.regsiter" />
                                    </Button> */}
                                    <Link to="/signin">
                                        <IntlMessages id="signUp.alreadyMember" />
                                    </Link>
                                </div>


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
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect (mapStateToProps, {
    userSignUp,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn,
    clearMsg
}) (SignUp);
