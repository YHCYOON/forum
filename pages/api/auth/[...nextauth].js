import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import {connectDB} from "@/util/database";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'f969541352864db89fb1',
            clientSecret: 'dff0afa1ba11416f1990ceb95e102f53a8cd604a',
        }),
    ],
    secret : 'fe1b2vwb11db5wd9wf159qh1t7j1eq161h5qer616fd1gsfdgsrd86v1e8',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);