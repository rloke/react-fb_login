
function App() {
    const [login, setLogin] = useState(false); //set up login
    const [data, setData] = useState({}); //set up fb data
    const [picture, setPicture] = useState(''); //set up fb profile image

  return (
    <div class="container">
        <Card>
            <Card.Header>
                <h1>My React App</h1>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {!login &&
                    <React.Fragment>
                        <h3>Please login using one of the following:</h3>
                        {/* Login Form */}
                        <LoginForm />
                        {/* FB Login Button */}
                        <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook}
                            icon="fa-facebook"
                        />
                    </React.Fragment>
                    }

                    {login &&
                        <Home fbpic={picture} fbdata={data} />
                    }
                </Card.Text>
            </Card.Body>
      </Card>
    </div>
  )
}


