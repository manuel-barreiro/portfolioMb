import { getRequestConfig } from "next-intl/server"
import { cookies, headers } from "next/headers"

export default getRequestConfig(async () => {
  const cookieStore = cookies()
  const localeCookie = cookieStore.get("NEXT_LOCALE")

  // Get browser language
  const acceptLanguage = headers().get("accept-language") || ""
  const browserLocale = acceptLanguage.split(",")[0].split("-")[0]

  // Use cookie if exists, otherwise check browser locale
  const locale =
    localeCookie?.value ||
    (browserLocale?.toLowerCase().startsWith("es") ? "es" : "en")

  return {
    locale,
    messages: (await import(`../../messages/${locale}.ts`)).default,
  }
})
