'use client'

import { Form, Input, Radio } from 'antd'
import styles from './page.module.scss'
import Button from '@/app/Components/button/button'

export default () => {
    return(
        <div className={styles.container}>
          <div className={styles.left}></div>
            <Form className={styles.form}
            name="register"
            labelCol={{ span: 6 }}
            style={{ maxWidth: 600, width: 400}}
            requiredMark={false}
            layout='vertical'
            >
            <Form.Item label="სახელი">
                <Input />
            </Form.Item>
            <Form.Item label="გვარი">
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="მეილი"
                rules={[
                    {
                        type: 'email',
                        message: 'მეილი არასწორია'
                    },
                    {
                        required: true,
                        message: 'გთხოვთ ჩაწეროთ თქვენი მეილი',
                    },
                    ]}
            ><Input />
            </Form.Item>

            <Form.Item label="სქესი">
                <Radio.Group>
                    <Radio value="კაცი"> მამრობითი </Radio>
                    <Radio value="ქალი"> მდედრობითი </Radio>
                </Radio.Group>
            </Form.Item>
            
            <Form.Item
        name="password"
        label="პაროლი"
        rules={[
          {
            required: true,
            message: 'გთხოვთ ჩაწეროთ თქვენი პაროლი!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password"
        label="გაიმეორეთ პაროლი"
        rules={[
          {
            required: true,
            message: 'გთხოვთ ჩაწეროთ თქვენი პაროლი!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
        <Button>რეგისტრაცია</Button>
            </Form>
            <div className={styles.right}></div>
        </div>
    )
}