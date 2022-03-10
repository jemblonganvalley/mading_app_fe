
import {NextRequest, NextResponse} from "next/server"
import jwt from "jsonwebtoken"

export default async function middleware(req = NextRequest,res = NextResponse, next){

    try {
        let token = await req.cookies["_madingapp"]
        const url = await req.nextUrl.clone()
        url.pathname = '/'

        if(!token){
            return NextResponse.redirect(url)
        }

        let checkToken = await jwt.verify(token, process.env.API_SECRET)

        if(!checkToken){
            return NextResponse.redirect(url)
        }
    } catch (error) {
        const url = await req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
    }

}