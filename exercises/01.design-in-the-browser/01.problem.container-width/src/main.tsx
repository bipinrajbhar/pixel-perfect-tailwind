import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProfile from './UserProfile'

import './styles/font.css'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProfile />
	</React.StrictMode>,
)