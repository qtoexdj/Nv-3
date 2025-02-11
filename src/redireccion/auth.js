export const signIn = async (email, password) => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) return null

  const role = user?.app_metadata?.role || 'user'
  return { user, role }
}
