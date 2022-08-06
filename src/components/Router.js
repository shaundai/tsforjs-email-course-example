import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import NotFound from './NotFound'
import Redirecting from './Redirecting'
import { App } from './App'

const Router = () => (
	<Routes>
		<Route exact path='/' element={<Login/>} />
		<Route path='/redirect' element={<Redirecting/>} />
		<Route path='/app' element={<App/>} />
		<Route element={<NotFound/>} />
	</Routes>
)

export default Router
