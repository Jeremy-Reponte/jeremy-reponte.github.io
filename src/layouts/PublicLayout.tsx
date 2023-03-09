import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div className='page-container'>
            <Outlet />
        </div>
    )
}

export default PublicLayout;