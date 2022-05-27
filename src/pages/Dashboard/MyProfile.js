import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = async data=>{
        console.log(data);
            const email = user?.email;
            const currentUser = {
                name:data?.name,
                education:data?.education,
                address:data?.address,
                phone:data?.phone,
                linkdein:data?.linkdein
            }
            if (email) {
                fetch(`http://localhost:5000/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.result.acknowledged){
                            toast("Updated Successfully")
                            reset()
                        }
                        
                     })
            }
    }

    
    return (
        <div>
            <h1 className='text-2xl text-center'>Profile Information</h1>
            <div class="bg-transparent mx-auto max-w-xs my-5 rounded-2xl w-100 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name")}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address")}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone")}
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Education"
                            className="input input-bordered w-full max-w-xs"
                            {...register("education")}
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn ID url</span>
                        </label>
                        <input
                            type="text"
                            placeholder="LinkedIn ID url"
                            className="input input-bordered w-full max-w-xs"
                            {...register("linkdein")}
                        />
                      
                    </div>
                    <input className='btn w-full max-w-xs my-5' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;