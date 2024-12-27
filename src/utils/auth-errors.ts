export const getAuthErrorMessage = (code: string): string => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email";
    case "auth/wrong-password":
      return "Invalid password";
    case "auth/invalid-email":
      return "Invalid email format";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later";
    case "auth/invalid-credential":
      return "Invalid credentials";
    default:
      return `An error occurred during sign in: ${code}`;
  }
};

export const getSignUpErrorMessage = (code: string): string => {
  switch (code) {
    case "auth/email-already-in-use":
      return "Email is already in use";
    case "auth/weak-password":
      return "Password is too weak";
    case "auth/invalid-email":
      return "Invalid email format";
    default:
      return `An error occurred during sign in: ${code}`;
  }
};
