import React from "react";

import Input from '../components/Input'
import Button from '../components/Button'
import { Layout, Card, Row, Col, Icon } from 'antd';


const Signup = () => {
	return (
		<Layout style={{ height: "100vh", justifyContent: "center" }}>
			<Row type="flex" justify="center" align="middle">
				<Col span={8}>
					<Card title="Sign up" headStyle={{ fontSize: 32 }}>
						<Row>
							<Input addonBefore={<Icon type="user" />} placeholder="Username" />
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Input addonBefore={<Icon type="mail" />} placeholder="Email" />
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Input password addonBefore={<Icon type="lock" />} placeholder="Password" />
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Input password addonBefore={<Icon type="lock" />} placeholder="Confirm Password" />
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Button block size="large" type="primary">Sign up</Button>
						</Row>
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default Signup;