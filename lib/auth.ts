import { supabase } from './supabase';

interface SignUpData {
  email: string;
  password: string;
  fullName: string;
}

export async function signUpUser({ email, password, fullName }: SignUpData) {
  // 1. Sign up user with Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    throw new Error(authError.message);
  }

  // 2. Create profile record
  const { error: profileError } = await supabase
    .from('profiles')
    .insert([
      {
        id: authData.user!.id,
        email,
        full_name: fullName,
      },
    ]);

  if (profileError) {
    throw new Error(profileError.message);
  }

  return authData;
}