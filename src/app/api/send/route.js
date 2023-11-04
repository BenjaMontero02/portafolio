import Email from "../../../components/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_gdjJ76Cc_7quQGqXWeVmPojCSjdoYdvFn");

export async function POST(request, response) {
    const res = await request.json();
    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["benjamontero.contacto@gmail.com"],
            subject:"Portafolio",
            react: <Email email={res.email} subject={res.subject} message={res.messageText} />
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
