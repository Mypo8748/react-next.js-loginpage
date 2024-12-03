import { NextResponse } from "next/server";

export const user = [
    {
        id: 1,
        username:"perawit",
        password:"pipo"
    }
]

export async function GET() {
    return NextResponse.json(user);

}

export async function POST(request:Request) {
    const body = await request.json();
    const idx = user.find((i) => i.username === body.username && i.password === body.password)
    if (!idx){
        return NextResponse.json({ "status": "error" })
    }
    return NextResponse.json({"status": "success"})

    
    
      
}