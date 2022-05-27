import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [isAdmin] = useAdmin(user);
    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/bg.png')]">
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                        <li className='hover-bordered'><Link to='/dashboard'>My Profile</Link></li>
                        {!isAdmin && <>
                            <li className='hover-bordered'><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li className='hover-bordered'><Link to='/dashboard/reviews'>My Reviews</Link></li>
                            <li className='hover-bordered'><Link to='/dashboard/addreviews'>Add Reviews</Link></li>
                        </>
                        }
                        {isAdmin && <>
                            <li className='hover-bordered'><Link to='/dashboard/users'>All Users</Link></li>
                            <li className='hover-bordered'><Link to='/dashboard/addProduct'>Add a New Product</Link></li>
                            <li className='hover-bordered'><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                            <li className='hover-bordered'><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                        </>
                        }
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;