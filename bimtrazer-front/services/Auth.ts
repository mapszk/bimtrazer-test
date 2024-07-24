export const signIn = () => fetch("/api/sign-in", { method: "POST" });

export const signOut = () => fetch("/api/sign-out", { method: "POST" });
