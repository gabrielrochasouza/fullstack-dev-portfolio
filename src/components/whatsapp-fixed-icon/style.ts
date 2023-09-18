import styled from "styled-components";

export const IconContainer = styled.a`
    position: fixed;
    right: 20px;
    bottom:20px;
    z-index: 60;
    cursor: pointer;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid var(--text-primary);
        background-color: var(--whatsapp-color);
        cursor: pointer;
    }
    svg{
        color: var(--text-primary);
        font-size: 2rem;
        position: relative;
        cursor: pointer;
    }
    .whats-container{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        .box{
            padding: 10px;
            border-radius: 10px;
            background-color: #fff;
            color: #000;
            cursor: pointer;
        }
    }
`
