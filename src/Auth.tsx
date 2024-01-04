import "./index.css";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { client } from "./services/supabase";

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Auth
        providers={[]}
        supabaseClient={client}
        appearance={{ theme: ThemeSupa }}
      />
    );
  } else {
    return children;
  }
}

export default AuthProvider;
