import styled from "styled-components";

export const AboutContainer = styled.section`
 
    background-color: var(--green-color);
    .about-me{
        min-height: 100vh;
        padding: 20px;
        max-width: var(--max-c-w);
        margin: 0px auto 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        flex-wrap: wrap-reverse;
        position: relative;
        @media (max-width:1170px) {
            padding: 20px;
        }
        @media (max-width:768px) {
            gap: 0px;
            padding: 50px 20px;
        }
        h3 {
            color: #fff ;
        }
        .col-left{
            max-width: 700px;
            @media (max-width:568px) {
                padding: 40px 20px;
            }
            @media (max-width:468px) {
                gap: 0px;
                padding: 50px 8px;
            }
            p,li{
                font-size: 1.15rem;
                font-weight: 500;
                color: var(--bg-primary);
                @media (max-width:1079px) {
                    font-size: 1rem;
                }
            }
            .techs{
                list-style: circle;
                li{
                    list-style: circle;
                    display: inline-block;
                    width: 200px;
                    font-family: var(--t-p);
                    @media (max-width:768px) {
                        width: 140px
                    }
                }
            }

            h3{
                display: inline;
                position: relative;
                ::after{
                    content: '';
                    width: 80px;
                    position: absolute;
                    top: 35px;
                    right: -100px;
                    height: 2px;
                    background-color: #000;
                }
            }
            p{
                margin: 20px 0 0;
                font-family: var(--t-p);
                
                line-height: 1.3rem;
                @media (max-width:768px) {
                    line-height: 1rem;
                    
                }
            }
        }
        .col-right{
            padding: 80px 0 0;
            @media (max-width:1170px) {
                display:none;

            }
            figure{
                overflow: hidden;
                height: 300px;
                width: 300px;
                background-color: var(--green-color);
                border-radius: 20px;
                border-spacing: 20px;
                transition: 1s all;
                filter: grayscale(1);
                box-shadow: #000 20px 20px 0 0 ;
                border: 2px solid #000;
                opacity: 0.7;
                
 
                @media (max-width:425px) {
                    border-radius: 50%;
                    height: 220px;
                    margin: 0 auto;
                    box-shadow: 0 0;
                    width: 220px;
                }

                img{
                    width: 100%;
                    height: 100%;
                    /* opacity: 0.7; */
                    position: relative;
                    
                    @media (max-width:425px) {
                        border-radius: 50%;
                        overflow: hidden;
                        box-shadow: 0 0;
                    }

                }
            }
            figure:hover{
                filter: grayscale(0);
                transition: 1s all;
                opacity: 1;
                box-shadow: #000 10px 10px 0 0 ;
            }
        }
        .technologies-icons{
                margin: 45px 0 0;
                justify-content: center;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                svg{
                    cursor: pointer;
                    font-size: 37px;
                    transition: 200ms all;
                    :hover{
                        transition: 200ms all;
                        color: #000;
                    }
                }
                @media (max-width:768px) {
                    margin: 20px 0 0;
                    gap: 16px;
                    svg{
                        font-size: 25px;
                    } 
                }
            }
    }

`