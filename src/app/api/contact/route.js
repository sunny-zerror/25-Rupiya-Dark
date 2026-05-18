import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        const {
            type,
            service,
            hasBudget,
            budget,
            projectDetails,
            name,
            email,
            company,
            contact,
            message,
        } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });

        const createRow = (label, value) => {

            if (
                value === undefined ||
                value === null ||
                value === "" ||
                value === "undefined"
            ) {
                return "";
            }

            return `
        <tr>
            <td style="border:1px solid #ddd;padding:10px;">
                <strong>${label}</strong>
            </td>

            <td style="border:1px solid #ddd;padding:10px;">
                ${value}
            </td>
        </tr>
    `;
        };

        const htmlTemplate = `
<div style="font-family:Arial;padding:20px;background:#f9f9f9;">

    <div style="max-width:700px;margin:auto;background:white;padding:30px;border-radius:12px;">

        <h2 style="margin-bottom:20px;color:#111;">
            New Contact Form Submission 🚀
        </h2>

        <table style="border-collapse:collapse;width:100%;">

            ${createRow("Type", type)}

            ${createRow("Name", name)}

            ${createRow("Email", email)}

            ${createRow("Contact", contact)}

            ${createRow("Company", company)}

            ${createRow("Service", service)}

            ${createRow("Has Budget", hasBudget)}

            ${createRow("Budget", budget)}

            ${createRow("Project Details", projectDetails)}

            ${createRow("Message", message)}

        </table>

    </div>

</div>
`;

        await transporter.sendMail({
            from: `"Your Website" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
            to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
            subject: "New Contact Form Submission",
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