import React from 'react';
import { Spin, Row, Col } from 'antd';

export default function loadingScreen() {
	return (
			<Row type="flex" justify="center"> <Col> <Spin size="large"/> </Col> </Row>
		)
}