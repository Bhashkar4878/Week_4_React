import {useState} from 'react';

function ProfileForm({initData,onSave}){
    const [formData,setFormData] = useState(()=>
    ({
        name: initData?.name||'',
        role: initData?.role||'',
        bio: initData?.bio||'',
        location: initData?.location||'',
        skills: initData?.skills?.join(',')||''
    }));

    const handlechange=(e)=>{
        const {name,value} =e.target;
        setFormData(prev=>({
            ...prev,
        [name]:value
        }));
    };
    const handlesubmit =(e) =>{
        e.preventDefault();
        const profiledata={
            ...formData,
            skills: formData.skills.split(',').map(skill=>skill.trim()).filter(Boolean)
        };
        onSave(profiledata);
    };
    return(
        <form className='profile-form' onSubmit={handlesubmit}>
            <h2>Make Your Profile</h2>
            <p className='description'>
                Enter Your Details
            </p>
            <label > Full Name</label>
            <input type='text' name='name' placeholder='Enter your Name' value={formData.name} onChange={handlechange} required>
            </input>
            <label>Current Role</label>
            <input type='text' name='role' placeholder='e.g. Web Developer' value={formData.role} onChange={handlechange} required>
            </input>
            <label>Bio</label>
            <input type='text' name='bio' placeholder='About You' value={formData.bio} onChange={handlechange} required>
            </input>
            <label>Current Location</label>
            <input type='text' name='location' placeholder='e.g. India' value={formData.location} onChange={handlechange} required>
            </input>
            <label >Skills</label>
            <input type='text' name='skills' placeholder='React,MongoDB,JS' value={formData.skills} onChange={handlechange} required>
            </input>
            <button type='submit' className='Gen-btn'>
                Generate Profile
            </button>


        </form>
    );

}

export default ProfileForm;