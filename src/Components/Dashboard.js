import React from 'react';
import useAuth from './useAuth'
import { Container } from './react-bootstrap'
import { Form } from 'react-bootstrap';

function Dashboard({ code }) {
    const accessToken = useAuth(code)

    const [search, setSearch] = useState("")

    return <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
        <Form.Control 
            type="search"
            placeholder="Search Songs/Artists" 
            value={search}
            onChange={e => setSearch(e.target.value)} 
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
            {searchResults.map(track => (
                <TrackSearchResult track={track} key={}track.uri
            ))}
        </div>
    </Container>

}

export default Dashboard;