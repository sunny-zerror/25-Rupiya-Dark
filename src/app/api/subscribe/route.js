import nodemailer from "nodemailer";

export async function POST(req) {

    try {

        const body = await req.json();

        const { email } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });

        const htmlTemplate = `
        <div style="font-family:Arial;padding:20px;background:#f9f9f9;">

            <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:12px;">

                <h2 style="margin-bottom:20px;color:#111;">
                    New Newsletter Subscription ✨
                </h2>

                <table style="border-collapse:collapse;width:100%;">

                    <tr>
                        <td style="border:1px solid #ddd;padding:12px;">
                            <strong>Email</strong>
                        </td>

                        <td style="border:1px solid #ddd;padding:12px;">
                            ${email}
                        </td>
                    </tr>

                </table>

            </div>

        </div>
        `;

        await transporter.sendMail({
            from: `"Your Website" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
            to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
            subject: "New Newsletter Subscription",
            html: htmlTemplate,
        });

        return Response.json({
            success: true,
        });

    } catch (error) {

        console.log(error);

        return Response.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}