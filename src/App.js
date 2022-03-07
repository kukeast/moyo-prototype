import RangeSlider from "./components/RangeSlider";
import styled from 'styled-components'

const Container = styled.div`
    width: 390px;
`

function App() {
    return (
        <Container>
            <RangeSlider/>
        </Container>
    );
}
  
export default App;
  