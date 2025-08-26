// src/components/auth/ProtectedRoute.tsx
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProtectedRoute() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    // You can show a more sophisticated loading spinner here
    return (
      <div className="container mx-auto p-8">
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!session) {
    // If no user is logged in, redirect them to the login page
    return <Navigate to="/login" replace />;
  }

  // If a user is logged in, show the page they were trying to access
  return <Outlet />;
}
