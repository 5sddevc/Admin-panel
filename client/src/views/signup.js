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
							<Col span={24}>
								<Input addonBefore={<Icon type="user" />} placeholder="Username" />
							</Col>
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Col span={24}>
								<Input addonBefore={<Icon type="mail" />} placeholder="Email" />
							</Col>
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Col span={24}>
								<Input password addonBefore={<Icon type="lock" />} placeholder="Password" />
							</Col>
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Col span={24}>
								<Input password addonBefore={<Icon type="lock" />} placeholder="Confirm Password" />
							</Col>
						</Row>
						<Row style={{ marginTop: 20 }}>
							<Col span={24}>
								<Button block size="large" type="primary">Sign up</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default Signup;