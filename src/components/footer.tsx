
import { FC } from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MBOS</h2>
          <p className="text-sm">
            Bizning shinam mehmonxona xonalari sizga qulaylik va dam olish uchun
            ideal joyni taqdim etadi. Nafsatingiz va xotirjamligingiz uchun
            barcha qulayliklar sizning xizmatingizda.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <ul className="space-y-2 mb-4 md:mb-0">
            <li>
              <Link href="#" className="hover:underline">
                Asosiy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Xonalar
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Bog'lanish
              </a>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Galereya
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Xizmatlar
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and social media */}
        <div>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="inline-block">📞</span> +998(90) 005-07-05
            </li>
            <li>
              <span className="inline-block">📍</span> Urganch sh. Nuri Isoyi 69
            </li>
            <li>
              <span className="inline-block">📧</span> Jamoliddin0819@gmail.com
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            {/* Replace '#' with actual links */}
            <Link href="#" className="hover:opacity-80">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                src="/icons/telegram.svg"
                alt="Telegram"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
    </footer>
  );
};

export default Footer;
