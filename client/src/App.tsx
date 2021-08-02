import {useState, useEffect} from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import EventList from 'components/EventList';
import Form from 'components/Form';
import Wrapper from 'components/Wrapper';
import Card from 'components/Card';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Caveat", cursive;
    display: flex;
    flex-direction: column;
    height:100%;
    margin: 0 auto;
    background-color: #f0f0f0;
  }
  input {
    font-size:1.2rem;
  }

  @media only screen and (max-width: 600px) {
    html {
      line-height: 0.5rem;
    }
  }
  
`

const App = () => {
  const [events, setEvents] = useState([]);
  async function fetchEvents() {
      await fetch(`${process.env.API_URL}/`)
            .then(res => res.json())
            .then(res => setEvents(res));
  }
  
  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <>
      <GlobalStyle />
      <main>
        <Header/>
        <Wrapper>
          <Card title="Add new Event">
            <Form handleSubmit={fetchEvents}/>
          </Card>
          <Card title="List of events">
            <EventList data={events}/>
          </Card>
        </Wrapper>
      </main>
    </>
  );
}

export default App;
