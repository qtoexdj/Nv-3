import './style.css'
import { Login, setupLogin } from './src/Login.js'

document.querySelector('#app').innerHTML = `
  <div class="login-wrapper">
    ${Login()}
  </div>
`

setupLogin()
