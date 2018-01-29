import React from 'react';
import { Row, Col } from 'antd';
import loadingGif from  '../loading.gif'

export default function loadingScreen() {
	return (
			<Row type="flex" justify="center"> <Col> <img src= {loadingGif} alt= "Now loading..."/> </Col> </Row>
		)
}