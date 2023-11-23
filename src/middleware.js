import { NextRequest, NextResponse } from "next/server";
export async function middleware(req) {
    const { ip, nextUrl} = req;

    nextUrl.searchParams.set('clientIp', ip);
    return NextResponse.rewrite(nextUrl);
}