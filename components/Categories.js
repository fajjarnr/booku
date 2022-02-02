import Link from 'next/link';

const category = [
  {
    id: 1,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Buku_Baru__w100_hauto.png',
    title: 'Buku Baru Andalan',
  },
  {
    id: 2,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Buku_Pilihan__w100_hauto.png',
    title: 'Buku Pilihan',
  },
  {
    id: 3,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Buku_Import__w100_hauto.png',
    title: 'Buku Import',
  },
  {
    id: 4,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_ebook__w100_hauto.png',
    title: 'E-book',
  },
  {
    id: 5,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Voucher_Gramedia_Academy_2__w100_hauto.png',
    title: 'Academy',
  },
  {
    id: 6,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Print_on_Demand__w100_hauto.png',
    title: 'Print on Demand',
  },
  {
    id: 7,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Buku_Diskon_3__w100_hauto.png',
    title: 'Diskon Buku',
  },
  {
    id: 8,
    imageUrl:
      'https://cdn.gramedia.com/uploads/highlighted_menu/Icon_category_Mainan__w100_hauto.png',
    title: 'Mainan',
  },
];

export default function Categories() {
  return (
    <section className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container overflow-x-hidden">
      <div class="md:py-12 py-8 px-4">
        <div class="flex items-center justify-center mt-10">
          <div class="lg:px-8 grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-6 w-full">
            {category.map(({ id, imageUrl, title }) => (
              <Link href={`/promo/`}>
                <a
                  key={id}
                  class="md:w-48 w-full h-32 text-center flex flex-col items-center justify-center"
                >
                  <img src={imageUrl} alt={title} className="object-contain" />
                  <p className="font-semibold mt-3">{title}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
