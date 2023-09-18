import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    .line{
        display: inline-block;
        width: 100px;
        height: 2px;
        background-color: var(--text-primary);
    }
    html {
        overflow-y: hidden;
    }
    body{
        background-color: var(--bg-primary);
        color: var(--text-primary);
        font-family: var(--t-p);
        overflow-x: hidden;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: var(--text-primary);
    }
    ul{
        list-style: none;
    }
    html {
        scroll-behavior: smooth;
    }
    h3{
        font-size: 3rem;
        font-family: var(--t-p);
    }
    figcaption{
        display: none;
    }
    :root{
        --bg-primary:#060606;
        --bg-secondary:#111;
        --text-primary:#fff;
        --text-primary-grey:#ddd;
        --text-secondary:#6EFF63;
        --green-color:#6EFF63;
        --t-p:'Roboto Flex', sans-serif;
        --t-s:'Ubuntu Mono', monospace;
        --max-c-w:1200px;
        --whatsapp-color:#2fc524;
        --glow-color: #fff;
        --glow-spread-color: rgba(127, 255, 123, 0.781);
        --enhanced-glow-color: rgb(212, 255, 206);
        --btn-color: #1fff676e;
        --btn-color-text: rgb(36, 166, 13);
        @media (max-width: 768px) {
            font-size: 12px;
        }
        @media (min-width: 1868px) {
            --max-c-w:1300px;
            font-size: 19px;
            h3{
                font-size: 3.8rem;
            }
        }
    }
    ::-webkit-scrollbar{
        width: 4px;
        border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--green-color);
        border-radius: 3px;
        
    }
    ::-webkit-scrollbar-track{
        background-color: var(--text-primary-grey);
    }

    @keyframes flutuate {
        from{
            transform: translateY(-5px);
        }
        to{
            transform: translateY(5px);
        }
    }
    @keyframes flutuateIcon {
        from{
            transform: translateY(-7px);
        }
        to{
            transform: translateY(7px);
        }
    }
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`

export default GlobalStyle
