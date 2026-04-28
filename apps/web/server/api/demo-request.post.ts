import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string }>(event)
  const email = body?.email?.trim()

  if (!email) {
    setResponseStatus(event, 400)
    return { success: false, error: 'Email is required.' }
  }

  try {
    const config = useRuntimeConfig()
    const resend = new Resend(config.resendApiKey)

    const timestamp = new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })

    const notificationHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#08090E;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#08090E;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0E1117;border-radius:12px;border:1px solid #1E2535;overflow:hidden;">

        <!-- Header gradient bar -->
        <tr><td style="height:3px;background:linear-gradient(90deg,#7C3AED,#EC4899,#F97316);"></td></tr>

        <!-- Header -->
        <tr><td style="padding:32px 40px 0;">
          <span style="font-size:12px;font-weight:600;color:#475569;letter-spacing:0.08em;text-transform:uppercase;">New Demo Request</span>
          <p style="margin:8px 0 0;font-size:24px;font-weight:700;color:#F0F2F5;line-height:1.3;">
            Someone wants a demo.
          </p>
        </td></tr>

        <!-- Email highlight box -->
        <tr><td style="padding:24px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#161C26;border-radius:8px;border:1px solid #1E2535;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0;font-size:11px;font-weight:600;color:#475569;letter-spacing:0.08em;text-transform:uppercase;">Submitted email</p>
              <p style="margin:8px 0 0;font-size:20px;font-weight:700;color:#7C3AED;">${email}</p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Details -->
        <tr><td style="padding:24px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 12px;">
                <span style="font-size:12px;color:#475569;">Time</span><br>
                <span style="font-size:14px;color:#8B9AB0;">${timestamp}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 12px;">
                <span style="font-size:12px;color:#475569;">Source</span><br>
                <span style="font-size:14px;color:#8B9AB0;">leadheat.io — demo form</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="padding:24px 40px;">
          <p style="margin:0;font-size:14px;color:#8B9AB0;line-height:1.7;">
            Reply to this email or reach out directly to follow up.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #1E2535;">
          <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
            LeadHeat · leadheat.io<br>
            Internal notification — do not forward.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    const confirmationHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#08090E;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#08090E;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0E1117;border-radius:12px;border:1px solid #1E2535;overflow:hidden;">
        <tr><td style="height:3px;background:linear-gradient(90deg,#7C3AED,#EC4899,#F97316);"></td></tr>
        <tr><td style="padding:32px 40px 0;">
          <span style="font-size:18px;font-weight:700;color:#F0F2F5;">LeadHeat</span>
        </td></tr>
        <tr><td style="padding:24px 40px 0;">
          <p style="margin:0;font-size:24px;font-weight:700;color:#F0F2F5;line-height:1.3;">
            We got your request.
          </p>
          <p style="margin:16px 0 0;font-size:15px;color:#8B9AB0;line-height:1.7;">
            Hi there,<br><br>
            Thanks for reaching out — we'll be in touch within 24 hours to schedule your demo.<br><br>
            In the meantime, here's what LeadHeat does in one sentence:
          </p>
          <p style="margin:20px 0 0;font-size:15px;color:#F0F2F5;font-style:italic;line-height:1.7;padding:16px 20px;background:#161C26;border-radius:8px;border-left:3px solid #7C3AED;">
            "LeadHeat builds familiarity with your prospects before you send a single message — so your outreach lands warm."
          </p>
          <p style="margin:24px 0 0;font-size:15px;color:#8B9AB0;line-height:1.7;">
            Talk soon,<br>
            <span style="color:#F0F2F5;font-weight:600;">Jakub</span><br>
            <span style="color:#475569;font-size:13px;">Founder, LeadHeat</span>
          </p>
        </td></tr>
        <tr><td style="padding:32px 40px;border-top:1px solid #1E2535;margin-top:32px;">
          <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
            LeadHeat · leadheat.io<br>
            You received this because you requested a demo at leadheat.io.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

    const notificationPromise = resend.emails.send({
      from: 'LeadHeat Notifications <hello@leadheat.io>',
      to: 'kubak.ko@seznam.cz',
      subject: `🔥 New demo request — ${email}`,
      html: notificationHtml,
    })

    const confirmationPromise = resend.emails.send({
      from: 'Jakub from LeadHeat <hello@leadheat.io>',
      to: email,
      subject: 'Talk soon — LeadHeat',
      html: confirmationHtml,
    })

    const [notificationResult, confirmationResult] = await Promise.all([
      notificationPromise,
      confirmationPromise,
    ])

    if (notificationResult.error) {
      setResponseStatus(event, 502)
      return {
        success: false,
        error: notificationResult.error.message ?? 'Failed to send email.',
      }
    }

    if (confirmationResult.error) {
      console.error(
        '[demo-request] confirmation email failed:',
        confirmationResult.error,
      )
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error.'
    setResponseStatus(event, 500)
    return { success: false, error: message }
  }
})
