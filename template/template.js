export const getTemplate = (content) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 30px;
        font-family: Arial, sans-serif;
        background-color: #171927 !important;
      }
      .wrapper {
        margin: 0;
        padding: 30px;
        font-family: Arial, sans-serif;
        background-color: #171927 !important;
      }
      table {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-collapse: collapse;
        border: 1px solid white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        padding: 20px;
        background-color: #171927;
        text-align: center;
      }
      .header .logo {
        background-image: url("https://api.cloudnest.in/assets/logo-full_white.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 180px;
        height: 60px;
        margin: 0 auto;
      }
      .header p {
        font-size: 10px;
        color: #ffffff;
        margin: 10px 0 0 0;
      }
      .header a {
        color: #ffffff;
        text-decoration: none;
        font-size: 20px;
      }
      .content {
        padding: 20px;
        color: #333333;
        line-height: 1.6;
      }
      .signature {
        padding: 20px;
        color: #666666;
        border-top: 1px solid #dddddd;
        font-size: 12px;
      }
      .footer {
        padding: 20px;
        text-align: center;
        background-color: #171927;
        color: #ffffff;
        font-size: 12px;
      }
      .footer p {
        color: #ffffff;
      }
      .social-links {
        text-align: center;
      }
      .social-links a {
        display: inline-block;
        margin: 0 10px;
        color: #ffffff;
        text-decoration: none;
        font-size: 12px;
      }
      .social-links .instagram,
      .social-links .facebook {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .social-links .instagram {
        background-image: url("https://api.cloudnest.in/assets/Instagram.png");
      }
      .social-links .facebook {
        background-image: url("https://api.cloudnest.in/assets/facebook.png");
      }
      a {
        color: #171927;
        text-decoration: none;
      }
      @media only screen and (max-width: 600px) {
        body,
        table {
          width: 100% !important;
        }
        .content,
        .signature,
        .footer {
          padding: 10px;
        }
        .header a {
          font-size: 20px;
        }
        .header .logo {
          width: 150px;
          height: 50px;
        }
      }
      p{
      font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <table>
        <!-- Header -->
        <tr>
          <td class="header">
            <a href="https://cloudnest.in">
              <div class="logo"></div>
              <p>
                Empowering your online journey with reliable hosting and
                seamless support.
              </p>
            </a>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td class="content">${content}</td>
        </tr>

        <!-- Signature -->
        <tr>
          <td class="signature">
            <p>Best regards,</p>
            <p><strong>Cloudnest Team,</strong></p>
            <p>
              <a href="mailto:support@cloudnest.in">support@cloudnest.in</a>
            </p>
            <p>
              <a href="tel:+91-7411532575">+91-7411532575</a>
            </p>
            <br />
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td class="footer">
            <div class="social-links">
              <a href="https://www.instagram.com/cloudnesthosting/">
                <div class="instagram"></div>
              </a>
              <a
                href="https://www.facebook.com/people/CloudNest/61559662894968/"
              >
                <div class="facebook"></div>
              </a>
            </div>
            <p style="color: white; font-size: 12px; padding-top: 10px">
              P.S. Follow us on
              <a href="#" style="color: white; text-decoration: none"
                >Facebook</a
              >
              and
              <a href="#" style="color: white; text-decoration: none"
                >Instagram</a
              >
              for the latest updates, tips, and special offers!
            </p>
            <p>&copy; 2024 Cloudnest.in. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;
};
