import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
import { addBus } from "./client";

const { Option } = Select;
export const BusDrawerForm = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onFinish = values => {
        addBus(values).then(r => console.log(r.json()));
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                New account
            </Button>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            >
                <Form layout="vertical" onFinish={onFinish} hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="registrationNumber"
                                label="Registration Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter Registration Number',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter Registration Number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select a type',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select a type">
                                    <Option value="VIP">VIP</Option>
                                    <Option value="NORMAL">Normal</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={onClose} type="primary" htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};