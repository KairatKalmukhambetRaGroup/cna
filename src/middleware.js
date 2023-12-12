import { NextResponse } from "next/server";

export async function middleware(request) {
    const res = NextResponse.next();
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    console.log(ip, forwardedFor)
    if(!ip && forwardedFor){
      ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    } 
    if(ip){
      res.cookies.set("user-ip", ip, {
        httpOnly: false,
      });
    }
    
    return res;
  }