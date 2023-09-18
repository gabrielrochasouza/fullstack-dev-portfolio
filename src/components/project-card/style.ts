import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 25px 0;
    min-height: 300px;
    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        margin: 30px 0px;
    }
    figure{
        width: 500px;
        height: 270px;
        z-index: 10;
        background-color: var(--bg-secondary);
        border-radius: 10px;
        overflow: hidden;
        @media (max-width: 768px) {
            width: 100%;
            max-width: 470px;
            height: 225px;
            margin: 0 0 -22px;
            
        }
        img{
            opacity: 0.6;
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-position: 0 0;
            filter: grayscale(1);
            transition: 1s all;
        }
        :hover{
            filter: grayscale(0);
            opacity: 1;
            transition: 1s all;
        }
    }
    .content{
        z-index: 21;
    }
    span{
        font-family: var(--t-s);
        color: var(--green-color);
        font-size: 0.6rem;
    }
    .box-project{
        margin: 10px 0 0 -70px;
        border-radius: 10px;
        z-index: 20;
        background-color: var(--bg-secondary);
        padding:30px;
        max-width: 400px;
        border: 2px solid #404040;
        .proj-desc{
            font-size: 0.8rem;
            color: var(--text-primary-grey);
        }
        @media (max-width: 768px) {
            border-radius: 0px;
            margin: -10px 0 0 0px;
            padding: 20px 10px 30px 20px;
        }
        @media (max-width: 425px) {
            width: 95%;
            margin: 10px auto 0px;
        }
    }
    .tech-list{
        max-width: 340px;
        font-family: var(--t-s);
        font-size: 0.65rem;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin: 10px 0 0 15px;
        @media (max-width: 768px) {
            margin: 10px 0 0 10px;
            
        }
    }
    .icon-link{
        display: flex;
        gap: 20px;
        margin: 0px 0 0 30px;
        svg{
            cursor: pointer;
            font-size: 20px;
        }
        :hover{
            color: var(--green-color);
        }
        @media (max-width: 768px) {
            margin: 20px 40px -45px 50px;
            justify-content: flex-end;
        }

    }



`
