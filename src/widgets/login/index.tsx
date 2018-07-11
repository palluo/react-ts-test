import { login } from 'actions/login'
import { Button, Form, Icon, Input } from 'antd'
import { History } from 'history'
import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style/index.less'

interface IProps {
    form: any,
    login: (userName: string, password: string, callBack: () => void) => void,
    history: History
}
const FormItem = Form.Item
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const mapStateToProps = (state) => {
    return { ...state.login }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userName, password, callBack) => {
            dispatch(login(userName, password, callBack))
        }
    }
}
// @connect(
//     state => ({ ...state.login }),
//     dispatch => bindActionCreators({ login }, dispatch)
// )

class Login extends React.Component<IProps> {
    public static defaultProps = {
        isShow: true,
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    public componentDidMount() {
        this.props.form.validateFields();
    }
    public handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // this.props.history.push('/main')
                this.props.login(values.userName, values.password, () => this.props.history.replace('/main'))
            }
        });
    }
    public render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        let userNameError = isFieldTouched('userName') && getFieldError('userName')
        let passwordError = isFieldTouched('password') && getFieldError('password')
        userNameError = userNameError ? 'error' : ''
        passwordError = passwordError ? 'error' : ''
        return (
            <div className="dgp-login-container">
                <Form layout="inline" onSubmit={this.handleSubmit} className="loginForm">
                    <FormItem
                        validateStatus={userNameError}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名：" />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            type="password" placeholder="密码：" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            登 录
          </Button>
                    </FormItem>
                </Form>
            </div >
        )

    }
}
const wrappedLogin = Form.create()(Login)
export default connect(mapStateToProps, mapDispatchToProps)(wrappedLogin)