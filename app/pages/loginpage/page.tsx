'use client'

import { Form, Input } from "antd"
import styles from './page.module.scss'
import React from "react"
import Button from "@/app/Components/button/button"

export default () => {

    const onFinish = (values: any) => {
        console.log(values);
    }

    const onFinishFailed = (details: any) =>{
        console.log(details);
    }

    return(
        <div className={styles.container}>
            <div className={styles.left_background}></div>
        <Form className={styles.form_container} labelCol={{span: 8}} wrapperCol={{span: 16}} 
        onFinish={onFinish} 
        onFinishFailed={onFinishFailed}
        layout="vertical"
        requiredMark={false}
        >

            <Form.Item className={styles.form_item}
                        label='მეილი'
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'გთხოვთ ჩაწერეთ თქვენი მეილი'
                            },
                            {
                                type: 'email',
                                message: 'მეილი არასწორია'
                            }
                        ]}>
                <Input className={styles.input} />
            </Form.Item>

            <Form.Item      className={styles.form_item}
                        label='პაროლი'
                        name='password'
                            rules={[
                                {
                                    required:true,
                                    message: 'ჩაწერეთ პაროლი'
                                }
                            ]}
            >
                <Input.Password className={styles.input} />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className={styles.button}> შესვლა </Button>
            </Form.Item>
            <div className={styles.middle_background}></div>
        </Form>
            <div className={styles.background}></div>
        </div>
    )
}