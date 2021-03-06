import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Fajar',
      email: 'zfajart@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  books: [
    {
      title: 'Sebuah Seni untuk Bersikap Bodo Amat',
      slug: 'book-1',
      category: 'buku import',
      image: '/images/Bodo-Amat.jpg',
      isFeatured: true,
      featuredImage: '/images/Bodo-Amat.jpg',
      price: 53000,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      numOfPage: 256,
      isbn: 9786024526986,
      publisher: 'Gramedia Widiasarana Indonesia',
      language: 'Bahasa Indonesia',
      releaseDate: '2005-02-25',
      weight: 35,
      large: 14,
      long: 21,
      description:
        'Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer—telah membantu mengoreksi harapan-harapan delusional kita, baik mengenai diri kita sendiri maupun dunia. Ia kini menuangkan buah pikirnya yang keren itu di dalam buku hebat ini.',
    },
    {
      title: 'Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa',
      slug: 'book-2',
      category: 'buku import',
      image: '/images/atomic.jpg',
      isFeatured: true,
      featuredImage: '/images/atomic.jpg',
      price: 63500,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      numOfPage: 356,
      isbn: 9786020633176,
      publisher: 'Gramedia Widiasarana Indonesia',
      language: 'Bahasa Indonesia',
      releaseDate: '2005-02-25',
      weight: 0.35,
      largae: 14,
      long: 21,
      description:
        'Orang mengira ketika Anda ingin mengubah hidup, Anda perlu memikirkan hal-hal besar. Namun pakar kebiasaan terkenal kelas dunia James Clear telah menemukan sebuah cara lain. Ia tahu bahwa perubahan nyata berasal dari efek gabungan ratusan keputusan kecil—dari mengerjakan dua push-up sehari, bangun lima menit lebih awal, sampai menahan sebentar hasrat untuk menelepon.',
    },
    {
      title: 'Berani Tidak Disukai',
      slug: 'book-3',
      category: 'buku import',
      image: '/images/berani.jpg',
      isFeatured: true,
      featuredImage: '/images/berani.jpg',
      price: 65400,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      numOfPage: 256,
      isbn: 9786024526986,
      publisher: 'Gramedia Widiasarana Indonesia',
      language: 'Bahasa Indonesia',
      releaseDate: '2005-02-25',
      weight: 0.35,
      largae: 14,
      long: 21,
      description:
        'Berani Tidak Disukai, yang sudah terjual lebih dari 3,5 juta eksemplar, mengungkap rahasia mengeluarkan kekuatan terpendam yang memungkinkan Anda meraih kebahagiaan yang hakiki dan menjadi sosok yang Anda idam-idamkan.',
    },
  ],
  banners: [
    {
      image: '/images/bookfair.png',
    },
    {
      image: '/images/kolonirumah.png',
    },
    {
      image: '/images/melangkah.png',
    },
  ],
};

export default data;
