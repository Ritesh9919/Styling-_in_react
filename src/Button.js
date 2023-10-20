// import classes from './Heading.module.css';
import styled from 'styled-components';
const HeadingStyle = styled.h2`
   text-alignlign:center;
   color:blue;
   font-size:30px;
`;

function Button() {
    return (
        <div>
            <HeadingStyle>React App1</HeadingStyle>
        </div>
    )
}

export default Button;