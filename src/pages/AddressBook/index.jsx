import React from 'react';
import { Layout, Typography, Button, message, Space, Image } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import { e } from './e';
import { s } from './s';

const { Content } = Layout;
const { Title, Text } = Typography;

const AddressBook = () => {
    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        padding: '40px',
        backgroundColor: '#F5F5F5' // 更柔和的背景色
    };

    const qrCodeStyle = {
        marginTop: '20px',
        marginBottom: '20px',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' // 添加阴影
    };

    const textStyle = {
        color: '#333', // 深色文本
        display: 'flex',
        width: '700px',
        flexWrap: 'wrap',
        maxHeight: '600px',
        overflow: 'auto',
    };

    const imageStyle = {
        marginLeft: '10px',
        borderRadius: '50%',
        verticalAlign: 'middle',
        position: 'relative',
        top: '-4px'
    };

    const buttonStyle = {
        // backgroundColor: '#FFA726', // 按钮颜色
        // borderColor: '#FFA726',
        // color: '#fff',
        cursor: 'pointer',
        margin: '0.5rem'
    };

    const copyAddress = (address) => {
        copy(address);
        message.success('地址已复制到剪贴板');
    };

    return (
        <Layout>
            <Content style={contentStyle}>
                <Title level={2}>地址簿</Title>

                <Space align='start'>
                    <div>
                        <Title level={3}>EVM地址：</Title>

                        <div style={textStyle}>
                            {e.map((add, index) => (
                                <p key={index} style={buttonStyle} onClick={() => copyAddress(add)}>
                                    {add}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Title level={3}>STK地址：</Title>
                        <div style={textStyle}>
                            {s.map((add, index) => (
                                <p key={index} style={buttonStyle} onClick={() => copyAddress(add)}>
                                    {add}
                                </p>
                            ))}
                        </div>
                    </div>
                </Space>
            </Content>
        </Layout>
    );
}

export default AddressBook;
