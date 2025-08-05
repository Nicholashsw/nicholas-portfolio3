import { c as contactFormSchema } from '../../chunks/type_D1NHzS_B.mjs';
import { u as ui } from '../../chunks/ui_ClMkwq-h.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let lang = "en";
  let currentTranslations = ui[lang].contactPage;
  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage;
    }
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    const errorResponse = {
      status: "error",
      message: currentTranslations.toastErrorUnexpected,
      error: "Invalid JSON input"
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const validationResult = contactFormSchema.safeParse(formDataForValidation);
  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const { firstName, lastName, email, message } = validationResult.data;
  console.log("Contact form submission received (simulation):");
  console.log("Language used for submission:", lang);
  console.log("Validated data:", validationResult.data);
  console.log("---");
  console.log("To implement actual email sending:");
  console.log("1. Choose an email service provider.");
  console.log("2. Install necessary SDKs (e.g., `bun add resend`).");
  console.log(
    "3. Configure API keys and sender/receiver emails in .env variables."
  );
  console.log(
    "4. Write a function (e.g., in `src/lib/email.ts`) to send emails using the SDK."
  );
  console.log("5. Import and call that function here, handling its response.");
  console.log("---");
  return new Response(
    JSON.stringify({
      status: "success",
      message: `${currentTranslations.toastSuccessMessageSent} (Simulated - No email was sent)`
      // data: { simulatedId: `sim-${Date.now()}` } // Optionally, simulate some data in response
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
