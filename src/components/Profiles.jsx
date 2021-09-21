import React, { useState } from "react";
import "../styles/Profiles.css";
import { profileData } from "./config";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const addAnimations = () => {
  document.querySelectorAll(".img-container").forEach((imgc) => {
    imgc.classList.add("animate__animated", "animate__fadeIn");
  });
};
const removeAnimations = () => {
  document.querySelectorAll(".img-container").forEach((imgc) => {
    imgc.classList.remove("animate__animated", "animate__fadeIn");
  });
};

export default function Profiles() {
  const [mainProfile, setMainProfile] = useState(profileData()[0]);
  const [profiles, setprofiles] = useState(profileData());
  return (
    <div className="profiles">
      <div className="content ">
        <div className="caption">“{mainProfile.caption}”</div>
        <h5>{mainProfile.name}</h5>
        <em>{mainProfile.designation}</em>
      </div>
      <div className="profile-images">
        {profiles.map((profile, i) => {
          if (i < 3)
            return (
              <div key={i} className={`img-container img-container-${i}`}>
                <img src={require(`../images/${profile.imageName}`).default} alt="1" className="" />
                {i === 0 ? <AiOutlinePlayCircle className="play-btn" /> : ""}
                {i === 2 ? (
                  <i
                    className="forward-button "
                    onClick={(e) => {
                      let temProfiles = profiles;
                      let firstProfile = temProfiles.shift();
                      temProfiles.push(firstProfile);

                      setMainProfile(temProfiles[0]);
                      setprofiles(temProfiles);
                    }}
                  >
                    <BsArrowRight />
                  </i>
                ) : (
                  ""
                )}
                {i === 1 ? (
                  <i
                    className="backward-button"
                    onClick={(e) => {
                      let temProfiles = profiles;
                      let lastProfile = temProfiles.pop();
                      temProfiles.unshift(lastProfile);

                      setMainProfile(temProfiles[0]);
                      setprofiles(temProfiles);

                      addAnimations();
                      setTimeout(() => {
                        removeAnimations();
                      }, 500);
                    }}
                  >
                    <BsArrowLeft />
                  </i>
                ) : (
                  ""
                )}
              </div>
            );
          else return null;
        })}
      </div>
    </div>
  );
}
