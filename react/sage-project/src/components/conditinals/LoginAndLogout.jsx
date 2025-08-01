import Button from "../Button";

function LoginAndLogout() {
  const isLogedIn = true; // This is boolean variable

//   if(isLogedIn){
//     return <Button name="Log out" />
//   } else {
//     return <Button name="Log in" />
//   }

    // return isLogedIn? <Button name="Log out" /> : <Button name="Log in" />;
  // Ternary operator is a shorthand for if-else statements
  return isLogedIn && <Button name="Log out" />
}
export default LoginAndLogout;
