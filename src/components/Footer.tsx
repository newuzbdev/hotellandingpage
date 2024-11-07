import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-cards-background  pt-8">
      <div className="mx-[100px] ">
        <div className="flex items-center justify-between">
          <h1 className="col-span-full mb-10 lg:col-span-2 lg:mb-0 text-2xl white">
            <Image
              src={"/images/footerImages/Mboslogo.svg"}
              alt="logo"
              width={154}
              height={65}
            />
            <p className="py-8 text-base text-white text-center lg:text-left w-[505px]">
              Bizning shinam mehmonxonamiz xonalari sizga qulaylik va dam olish
              uchun ideal joyni taqdim etadi. Nafis dizayni va sokin muhitimiz
              sizga xotirjamlik va farovonlik bag‘ishlaydi. Sizning
              qulayligingiz biz uchun muhim, shuning uchun mehmonxona
              xonalarimizda kerak bo‘lgan barcha qulayliklar sizning
              xizmatingizda.
            </p>
          </h1>
          <ul className="text-sm transition-all duration-500">
            <li className="mb-2">
              <a
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Asosiy{" "}
              </a>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Biz haqimizda
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Xonalar
              </Link>
            </li>
          </ul>

          <ul className="transition-all duration-500">
            <li className="mb-2">
              <a
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Bog’lanish{" "}
              </a>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Galeriya
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-white font-medium text-lg font-satoshi text-[20px] leading-10"
              >
                Xizmatlar
              </Link>
            </li>
          </ul>
          <ul className="transition-all duration-500 text-white space-y-6">
            <li className="mb-2 flex text-white gap-3">
              <Phone /> +998(50) 005-07-68
            </li>
            <li className="mb-2 font-normal flex gap-3">
              <MapPin />
              Urganch sh. Nuri hayot 69
            </li>
            <li className="mb-2 font-normal flex gap-2">
              <Mail />
              Jamoladdin0831@gmail.com
            </li>
          </ul>
        </div>

        <div className="py-7 border-t border-border">
          <div className="flex items-center justify-center flex-col lg:justify-end lg:flex-row gap-2">
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
