// src/pages/account/ProfilePage.tsx
import { supabase } from '@/lib/supabaseClient';
import { fetchProfile, updateProfile } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/hooks/useUser';

export default function ProfilePage() {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Get the current user's ID
    const { user } = useUser();
    const userId = user?.id;

    const { data: profile, isLoading } = useQuery({
        queryKey: ['profile', userId],
        queryFn: () => fetchProfile(userId!),
        enabled: !!userId,
    });

    const mutation = useMutation({
        mutationFn: (updates: any) => updateProfile({ userId: userId!, updates }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile', userId] });
            toast({ title: "Success", description: "Your profile has been updated." });
        },
        onError: (error) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    });

    // When the profile data loads, populate the form fields
    useEffect(() => {
        if (profile) {
            setValue('full_name', profile.full_name);
            setValue('email', profile.email);
            // ... set other fields
        }
    }, [profile, setValue]);

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

    if (isLoading) {
        return <div><Skeleton className="h-48 w-full" /></div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto max-w-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" {...register('email')} disabled className="bg-gray-100" />
                                </div>
                                <div>
                                    <Label htmlFor="full_name">Full Name</Label>
                                    <Input id="full_name" {...register('full_name')} />
                                </div>
                                {/* Add other address fields here following the same pattern */}
                                <Button type="submit" disabled={mutation.isPending}>
                                    {mutation.isPending ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
