export default function Footer() {
    return (
      <footer className="bg-[#20468F] text-white py-8">
        <div className="w-full px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <p className="mb-4 leading-relaxed">
                Bizning shinam mehmonxonamiz xonalari sizga qulaylik va dam olish uchun ideal joyni taqdim etadi. Nafis dizayni va sokin muhitimiz sizga xotirjamlik va farovonlik bag'ishlaydi. Sizning qulayligingiz biz uchun muhim, shuning uchun mehmonxona xonalarimizda kerak bo'lgan barcha qulayliklar sizning xizmatingizda.
              </p>
            </div>
            
            {/* Main Links Section */}
            <div>
              <h3 className="font-bold mb-4">Asosiy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Bog'lanish</a></li>
                <li><a href="#" className="hover:underline">Biz haqimizda</a></li>
                <li><a href="#" className="hover:underline">Galeriya</a></li>
                <li><a href="#" className="hover:underline">Xonalar</a></li>
                <li><a href="#" className="hover:underline">Xizmatlar</a></li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div>
              <h3 className="font-bold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li>+998(50) 005-07-68</li>
                <li>Jamoladdin0831@gmail.com</li>
                <li>Urganch sh. Nuri hayot 69</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  