import styled from "styled-components";

export const SectionContainer = styled.section`
    margin: 0 auto;
    max-width: var(--max-c-w);
    padding: 60px 20px;
    h3{
        display: inline-block;
        position: relative;
        ::before{
            content: '';
            height: 3px;
            width: 80px;
            top: 36px;
            right: -100px;
            background-color: var(--green-color);
            position: absolute;
        }
    }
`
