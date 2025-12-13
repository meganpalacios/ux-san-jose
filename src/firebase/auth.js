import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

export async function registerWithEmail({
  firstName,
  lastName,
  email,
  password,
}) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // opcional: guardar nombre completo en el perfil de Firebase Auth
  const displayName = `${firstName} ${lastName}`.trim();
  if (displayName) {
    await updateProfile(userCredential.user, { displayName });
  }

  return userCredential.user;
}

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
