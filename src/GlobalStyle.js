import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Poppins:wght@300;400;700&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      body {
        background: rgb(223,228,154);
        background: linear-gradient(125deg, rgba(223,228,154,1) 0%, rgba(220,220,220,0.5) 44%, rgba(137,153,3,0.5158438375350141) 78%, rgba(220,220,220,1) 100%);
        font-family: Arial,sans-serif;
      }
`
export default GlobalStyle
