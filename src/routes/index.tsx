import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/main-page/index'

const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    )
}

export default Router
