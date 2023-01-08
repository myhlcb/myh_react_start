import { Button, Checkbox, Form, Input, Card, message } from 'antd';
import Logo from '@/assert/logo.png';
import './index.scss';
import useStore from '@/store';
import { useNavigate } from 'react-router-dom';
function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();
  const [messageApi] = message.useMessage();
  const onFinish = async (values) => {
    console.log('Success:', values);
    const { username, password } = values;
    await loginStore.getToken({ username, password });
    // 跳转
    navigate('/', { replace: true });
    messageApi.open({
      type: 'success',
      content: '登陆成功',
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={Logo} alt='' />
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Login;
