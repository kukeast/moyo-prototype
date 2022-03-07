import RangeSlider from "./components/RangeSlider";
import styled from 'styled-components'

const Container = styled.div`
    margin: 30px auto;
    padding: 16px;
    max-width: 390px;
`

function App() {
    return (
        <Container>
            <RangeSlider/>
        </Container>
    );
}
  
export default App;
  