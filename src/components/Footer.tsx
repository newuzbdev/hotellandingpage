import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cards-background pt-10">
      <div className="mx-4 md:mx-8 lg:mx-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          <div className="w-full lg:w-auto text-center lg:text-left">
            <Image
              src={"/images/footerImages/Mboslogo.svg"}
              alt="logo"
              width={154}
              height={65}
              className="mx-auto lg:mx-0"
            />
            <p className="py-8 text-base text-white w-full lg:w-[505px]">
              Bizning shinam mehmonxonamiz xonalari sizga qulaylik va dam olish
              uchun ideal joyni taqdim etadi. Nafis dizayni va sokin muhitimiz
              sizga xotirjamlik va farovonlik bag&apos;ishlaydi. Sizning
              qulayligingiz biz uchun muhim, shuning uchun mehmonxona
              xonalarimizda kerak bo&apos;lgan barcha qulayliklar sizning
              xizmatingizda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
            <ul className="text-sm transition-all duration-500 text-center lg:text-left mt-2 md:mt-10 lg:mt-20">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Asosiy{" "}
                </a>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Xonalar
                </Link>
              </li>
            </ul>

            <ul className="transition-all duration-500 text-center lg:text-left mt-2 md:mt-10 lg:mt-20">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Bog&apos;lanish{" "}
                </a>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Galeriya
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white font-medium text-xl font-satoshi text-[20px] leading-10"
                >
                  Xizmatlar
                </Link>
              </li>
            </ul>

            <ul className="transition-all duration-500 text-white space-y-6 text-center lg:text-left my-2 md:mt-10 lg:mt-20">
              <li className="mb-2 flex items-center justify-center lg:justify-start text-white gap-3">
                <Phone /> +998(50) 005-07-68
              </li>
              <li className="mb-2 font-normal flex items-center justify-center lg:justify-start gap-3">
                <MapPin />
                Urganch sh. Nuri hayot 69
              </li>
              <li className="mb-2 font-normal flex items-center justify-center lg:justify-start gap-2">
                <Mail />
                Jamoladdin0831@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-border">
          <div className="flex items-center justify-end gap-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/footerImages/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>

            <Link
              href="https://www.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/footerImages/telegram.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
            </Link>

            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/footerImages/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}