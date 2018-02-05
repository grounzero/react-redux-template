import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Segment, Form } from 'semantic-ui-react';

class TeamDetails extends Component {
    constructor(props) {
        super(props);

        const { team } = props;
        this.state = { id: team ? team.id : 0, name: team ? team.name : '' };
    }

    componentWillReceiveProps({ team }) {
        if (team) {
            const { id, name } = team;
            this.setState({ id, name });
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        this.props.actions.saveTeam(this.state)
    }

    render() {
        const { name } = this.state

        return (
            <article>
                <Header as='h2' attached='top'>
                    {name}
                </Header>
                <Segment attached>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input label='Name' name='name' placeholder='Name' value={name} onChange={this.handleChange} />
                        </Form.Group>
                        <Button primary type='submit'>Save</Button>
                    </Form>
                </Segment>
            </article>
        );
    }
}

TeamDetails.propTypes = {
    team: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    actions: PropTypes.shape({
        saveTeam: PropTypes.func.isRequired
    }).isRequired,
};

export default TeamDetails;