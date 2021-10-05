import { Alert } from 'react-bootstrap'
import React from 'react'

const WarningSign = (props) => (
    <Alert variant="danger">{props.text}</Alert>
)

export default WarningSign