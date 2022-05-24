import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req) {
        if(signedinPages.find((p) => p === req.nextUrl.pathname)) {
            const token = req.cookies.TRAX_ACCESS_TOKEN

            if(!token) {
                const redirectUrl = req.nextUrl.clone()
                redirectUrl.pathname = '/signin'
                return NextResponse.redirect(redirectUrl)
            }
        }

}