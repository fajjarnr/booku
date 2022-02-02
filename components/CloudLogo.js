export default function CloudLogo() {
  return (
    <section className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container overflow-y-hidden">
      <div class="md:py-12 py-8 px-4">
        <div class="flex flex-col items-center justify-center mb-12">
          <h1 class="lg:text-3xl md:text-2xl text-xl font-bold leading-10 text-gray-800">
            Brand Pilihan
          </h1>
        </div>
        <div class="flex items-center justify-center mt-10">
          <div class="lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/gramedia_gpu_PWogFpD.png"
                alt="gramedia"
                className="w-full h-32 object-contain"
              />
            </div>
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/BRAND_LOGO_100_X_100.png"
                alt="brand"
                className="w-full h-32 object-contain"
              />
            </div>
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/Logo_BIP.jpeg"
                alt="bip"
                className="w-full h-32 object-contain"
              />
            </div>
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/logo_elex.jpg"
                alt="EMK"
                className="w-full h-32 object-contain"
              />
            </div>
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/kepustakaan-populer-gramedia.jpg"
                alt="kpg"
                className="w-full h-32 object-contain"
              />
            </div>
            <div class="md:w-48 w-full h-32 flex items-center justify-center">
              <img
                src="https://cdn.gramedia.com/uploads/vendor/Logo.png"
                alt="mnc"
                className="w-full h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
