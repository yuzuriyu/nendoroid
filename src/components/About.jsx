import React from "react";

export default function About() {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://r4.wallpaperflare.com/wallpaper/666/572/996/virtual-youtuber-hololive-kazama-iroha-bamboo-hd-wallpaper-e215e33cf8ea55665ea7dfaaadabcba3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair">About</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-xl font-bold mb-4 dark:text-white border-b">
              Welcome to NendoNest
            </h1>
            <p className="dark:text-white">
              At NendoNest, we invite you to explore a world where artistry
              meets play, where each figurine is a miniature marvel, and where
              the epitome of Nendoroid craftsmanship awaits. Our collection is
              carefully curated to elevate your passion for these exquisite
              creations, bringing you the pinnacle of Nendoroid excellence.
            </p>
          </div>
          <div>
            <h1 className="text-xl border-b font-bold mb-4 dark:text-white">
              Precision and Charm
            </h1>
            <p className="dark:text-white">
              Our commitment to quality and detail sets NendoNest apart. Each
              Nendoroid figurine in our collection is a testament to the
              meticulous craftsmanship and dedication of the artists behind
              these miniature marvels. From beloved characters to iconic scenes,
              every piece is a masterpiece that captures the essence of your
              favorite anime, manga, and gaming worlds.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b dark:text-white">
              Elevate Your Collection
            </h1>
            <p className="dark:text-white">
              NendoNest is more than a marketplace; it's a haven for collectors
              and enthusiasts alike. Whether you're a seasoned collector or just
              starting your journey into the world of Nendoroids, our carefully
              curated selection ensures that you'll find the perfect addition to
              your collection. Immerse yourself in the charm and precision that
              defines the Nendoroid experience.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b dark:text-white">
              Our Vision
            </h1>
            <p className="dark:text-white">
              At NendoNest, our vision is to be the go-to destination for
              Nendoroid enthusiasts, offering a seamless blend of artistry and
              play. We strive to provide a platform where collectors can find
              the most sought-after Nendoroids, appreciate the craftsmanship
              behind each piece, and connect with a community that shares their
              passion.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 border-b dark:text-white">
              Join Us on this Journey
            </h1>
            <p className="dark:text-white">
              We invite you to embark on a journey with NendoNest, where every
              figurine tells a story and every collector becomes part of a
              vibrant community. Whether you're looking to enhance your
              collection or simply admire the artistry behind Nendoroids,
              NendoNest is your destination for the finest in miniature
              craftsmanship.
            </p>
          </div>
          <p className="dark:text-white">
            Thank you for choosing NendoNest. Let us commence with a delightful
            experience.
          </p>
        </div>
      </div>
    </>
  );
}
