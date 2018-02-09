import React from 'react'

export default class Top extends React.Component {
    constructor(props) {
        super(props)

        this.triggerError = this.triggerError.bind(this)
        this.state = {
            error: null
        }
    }

    triggerError() {
        this.setState(({ error }) => ({
            error: 'yes error here.'
        }))
    }

    componentWillMount() {
    }

    render() {
        if (this.state.error)
            throw new Error(this.state.error)

        return (
            <React.Fragment>
                Such is in Fragment
                <button onClick={this.triggerError}>TRIGGER ERROR</button>
            </React.Fragment>)
    }
}
