import { useParams } from "react-router-dom";

export default function UserProfile() {
    const param = useParams();
    return (
        <>
            <h1>Welcome to User Profile Page</h1>
        </>
    );
}