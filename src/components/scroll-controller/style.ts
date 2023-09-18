import styled from "styled-components";

export const ControllerContainer = styled.div`
    bottom: 36px;
    left: 0px;
    width: 100vw;
    z-index:50;
    position: fixed;
    @media(max-width:450px) {
        display:none;
    }
    .internal-box{
        padding-left:30px;
        display: flex;
        gap: 8px;
        max-width: 1200px;
        margin: 0 auto;
        button {
            display:flex;
            border: 1px solid;
            align-items:center;
            justify-content: center;
            outline:none;
            border-radius: 50%;
            padding: 5px;
            background:  var(--green-color);
            width: 2rem;
            height: 2rem;
            transition: 1s all;
            svg {
                font-size: 2rem;
                color: #fff;
            }
        }
        button:hover {
            background: #fff;
            transition: 1s all;
            svg {
                color: var(--green-color);
            }
        }
    }

`