import { useState, useEffect } from 'react';

import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';

import './App.css';

function App(){
  const [profile,setProfile]=useState(()=>{
    try{
      const savedProfile=localStorage.getItem('userProfile');
      return savedProfile ? JSON.parse(savedProfile) : null;
    } catch(error){
      console.error('Profile not loaded',error);
      return null;
    }
  });

  const [isEditing,setIsEditing] =useState(false);

  useEffect(()=>{
    if(profile){
      localStorage.setItem(
        'userProfile',JSON.stringify(profile)
      );
    }
    else{
      localStorage.removeItem('userProfile');
    }
  },[profile]
);
const handleSave=(data) =>{
  setProfile(data);
  setIsEditing(false);
};
const handleEdit =()=>{
  setIsEditing(true);
};
const handleDelete=()=>{
  const confirmed=window.confirm(
    "Are you sure?"
  );
  if(confirmed){
    setProfile(null);
    setIsEditing(false);
  }
};
return(
<div className="app">

            <header className="page-header">


                <h1>
                    Profile <span>Generator</span>
                </h1>

                <p>
                    Create and personalize your profile.
                </p>

            </header>

            <main className="main-content">

                {!profile || isEditing ? (

                    <ProfileForm initData={profile} onSave={handleSave}/>
                ) : (

                    <section className="preview-section">

                        <div className="preview-heading">
                            <div>
                                <h2>Your Profile</h2>
                                <p>Profile saved successfully.</p>
                            </div>

                            <span className="saved-badge">
                                Saved
                            </span>
                        </div>

                        <ProfileCard profile={profile} />

                        <div className="action-buttons">

                            <button className="edit-btn" onClick={handleEdit}>
                                Edit Profile
                            </button>

                            <button className="delete-btn" onClick={handleDelete} >
                                Delete Profile
                            </button>

                        </div>

                    </section>

                )}

            </main>

           

        </div>
)
}

export default App;