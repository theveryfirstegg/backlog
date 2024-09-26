import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const options: NextAuthOptions = {
    pages: {
        signIn: '/login',
        signOut: '/login'
    },

    providers: [

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }

            },
                

            async authorize(credentials) {
                const user = { id: "42", name: "Dave", password:"nextauth"}

                if(credentials?.username === user.name && credentials?.password
                      === user.password){
                        
                        return user 
                      } else {
                        return null
                      }
                
            }
        }),
        
    ],

    
    
}