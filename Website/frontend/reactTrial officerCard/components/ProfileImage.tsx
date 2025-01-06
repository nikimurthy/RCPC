interface ProfileImageProps {
    img: string;
}

function ProfileImage(props: ProfileImageProps) {
    return (
        <div className = "profileLogo">
            <img className = "profileImage" src = {props.img}/>
        </div>
    )
}

export default ProfileImage;