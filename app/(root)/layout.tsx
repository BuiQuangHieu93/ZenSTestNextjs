import Heading from "../component/Heading";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import CookieConsentBanner from "../component/CookieConsentBanner";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Heading />
        <Banner />
        {children}
        <div className="h-[1px] w-full bg-[#d5d5d5]"></div>
        <Footer />
        <div className="fixed w-full bottom-0">
          <CookieConsentBanner />
        </div>
      </body>
    </html>
  );
}
