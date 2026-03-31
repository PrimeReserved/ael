"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  const { contactType, companyName, name, email, phone, message } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: "Author Energy Limited <training@authorenergy.com>", 
      to: ["training@authorenergy.com"], 
      subject: `[Contact Us Page] New Form Submission: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">New Contact Request</h2>
          <p style="font-size: 16px; color: #333;">You have a new message from the <strong>Contact Us</strong> page on the Author Energy Limited website.</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Contact Type:</strong> ${contactType}</p>
            ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ""}
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #1e1b4b;">Message:</h3>
            <p style="line-height: 1.6; color: #444; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666; text-align: center;">Sent from Author Energy Limited Website</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error (Contact):", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
}

export async function sendTrainingApplicationEmail(formData: any) {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    disciplineCategory,
    specificCourse,
    location,
    participantType,
    numberOfParticipants,
    marketingConsent,
    source
  } = formData;

  const fullName = `${firstName} ${lastName}`;

  try {
    const defaultSource = source || "Apply for Training Page";
    const { data, error } = await resend.emails.send({
      from: "Author Energy Limited <training@authorenergy.com>", 
      to: ["training@authorenergy.com"], 
      subject: `[${defaultSource}] New Application: ${specificCourse || disciplineCategory}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1e1b4b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">Training Application</h2>
          <p style="font-size: 16px; color: #333 text-align: center;">New enrollment request from the <strong>${defaultSource}</strong> on the Author Energy Limited website.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #f59e0b; font-size: 14px; text-transform: uppercase;">Applicant Details</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
          </div>

          <div style="background-color: #1e1b4b; color: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #f59e0b; font-size: 14px; text-transform: uppercase;">Course Selection</h3>
            <p><strong>Category:</strong> ${disciplineCategory}</p>
            <p><strong>Course:</strong> ${specificCourse}</p>
            <p><strong>Preferred Location:</strong> ${location}</p>
          </div>

          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Participant Type:</strong> ${participantType}</p>
            <p><strong>Number of Participants:</strong> ${numberOfParticipants}</p>
            <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666; text-align: center;">Sent from Author Energy Limited Website</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error (Training):", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending training application email:", error);
    return { success: false, error };
  }
}
