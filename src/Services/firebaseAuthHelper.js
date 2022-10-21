import { firebase } from "./firebaseHelper";
import { saveUserSession } from "./sessionHelper";

function attemptoRegisterNewUser(email, name, Password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, Password)
    .then((Response) => {
      const userId = Response.user.uid;
      addUserDetailsBasedOnUID(userId, email, name);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function addUserDetailsBasedOnUID(uid, email, name) {
  var H_marks = 0;
  var L_marks = 0;
  firebase
    .firestore()
    .collection("Users")
    .doc(uid)
    .set({ email, name, H_marks, L_marks });
}
export { attemptoRegisterNewUser };

function attemptToSignin(email, Password, navigation, rememberme) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, Password)
    .then(() => {
      if (rememberme == true) {
        saveUserSession("true");
      }
      navigation.replace("Hold");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { attemptToSignin };

const forgotPassword = (Email, navigation) => {
  console.log("reset email sent to " + Email);

  firebase
    .auth()
    .sendPasswordResetEmail(Email, null)
    .then(() => {
      alert("reset email sent to " + Email);
      navigation.replace("Home");
    })
    .catch(function (e) {
      console.log(e);
    });
};
export { forgotPassword };
