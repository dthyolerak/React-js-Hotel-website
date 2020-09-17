import Styled from 'styled-components';


const StyleHero = Styled.header`
margin: 4rem 0rem 0rem 0rem;
min-height: 60vh;
width:100%;
background: url(${props => props.image}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2rem solid #777065;
`;

export default StyleHero;