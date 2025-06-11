import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    await dbConnect();

    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ name,  email, password: hashedPassword });
        return NextResponse.json({ message: "User registered", user });
    } catch (error) {
        return NextResponse.json({ error: "Error registering user" });
    }
}
