import './App.css';
import { Form, Input, Button, Row } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import 'antd/dist/antd.css';

function App() {
  const handleSubmit = (values) => {
    console.log(values.num);
  };

  return (
    <div className='App'>
      <h1>Proedge Assignment Application</h1>
      <Form onFinish={handleSubmit} layout='vertical'>
        <FormItem
          name='num'
          rules={[
            {
              required: true,
              type: 'string',
              message:
                'Please Enter the Number with ,'
            },
          ]}
          hasFeedback
        >
          <Input
            size='large'
            placeholder='Enter the Number'
          />
        </FormItem>

        <Row>
          <Button
            style={{ backgroundColor: 'red', color: '#fff' }}
            htmlType='submit'
            size='large'
            block
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default App;