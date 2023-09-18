import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgb(6, 6, 6, 0.8);
    z-index: 200;
    transition: 1s all;
    .container{
        max-width: var(--max-c-w);
        margin: 0 auto;
        display: flex;
        padding: 5px 15px;
        justify-content: space-between;
        align-items: center;
        .logo{
            height: 65px;
            cursor: pointer;
            svg{
                height: 100%;
                width: 100%;
            }
        }
        nav{
            ul{
                @media (max-width:620px) {
                    display: none;
                }
                display: flex;
                gap: 25px;
                font-family: var(--t-s);
                font-size: 1rem;
                li{
                    cursor: pointer;
                }
                li a{
                    :hover{
                        color: var(--green-color);
                    }

                }
                li:last-child{
                    transition: 1s all;
                    a{
                        transition: 1s all;
                        padding:5px 30px;
                        border-radius: 5px;
                        border: 1px solid var(--green-color);
                        color: var(--green-color);
                    }
                    :hover{
                        transition: 1s all;
                        background-color: var(--green-color);
                        color:var(--bg-primary);
                    }
                }
            }
        }
    }

`;
