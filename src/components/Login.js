import React from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message, Radio } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import imgLogin from '../img/login.png'


const LoginForm = () => (
    <div className='login-form'>
        <style>
            {
                `body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                                                        height: 50.8em;
                                                        background:#2185d0!important;
                                                        }`
            }
        </style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' inverted textAlign='center'>
                    <Image src={imgLogin} /> Log-in to your account
        </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Field>
                            <Radio
                                label='Instituição de Ensino'
                                name='radioGroup'
                                value='Ensino'
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Instituição Beneficente'
                                name='radioGroup'
                                value='Beneficente'
                            />
                        </Form.Field>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>
                            Login
            </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to='/'>Sign Up</Link>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm

