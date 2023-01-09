import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, RedirectingUserPage } from './login'
import { NotFoundPage } from './NotFoundPage'
import { App } from './App'

export const Router = () => (
	<Routes>
		<Route exact path='/' element={<LoginPage />} />
		<Route path='/redirect' element={<RedirectingUserPage />} />
		<Route path='/app' element={<App />} />
		<Route element={<NotFoundPage />} />
	</Routes>
)