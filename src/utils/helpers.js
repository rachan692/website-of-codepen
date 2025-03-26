import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config/firebase.config";

// Google and GitHub providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Sign-in with Google
export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then((userCred) => {
    window.location.reload(); // Reload page after sign-in
  });
};

// Sign-in with GitHub
export const signInWithGithub = async () => {
  await signInWithRedirect(auth, githubProvider).then((userCred) => {
    window.location.reload(); // Reload page after sign-in
  });
};

// Sign-out action
export const signOutAction = async () => {
    await auth.signOut().then(() => {
      console.log("User signed out successfully");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };
  

// Example menu items
export const Menu = [
  { id: 1, name: "Projects", url: "/home/projects" },
  { id: 2, name: "Collections", url: "/home/collection" },
  { id: 3, name: "Profile", url: "/home/profile" }
];
