const InstagramIcon = () => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  );
};

export default function Footer() {
  const year = new Date().getFullYear();
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM;
  const instagramLink = `https://instagram.com/${instagram}`;

  return (
    <section id="footer">
      <footer className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <hr className="my-10 border-gray-200" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">
              {`© Copyright PT Explore Wisata Borobudur ${year}. All Rights Reserved.`}
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="flex mx-2 items-center space-x-1 text-sm text-gray-400 hover:text-gray-500"
              >
                <InstagramIcon />
                <span>{instagram}</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-4 lg:mt-6">
            <img
              className="h-4 lg:h-6 object-contain"
              src={"/explore-wisata-borobudur.png"}
              alt={"PT Explore Wisata Borobudur"}
            />
          </div>
        </div>
      </footer>
    </section>
  );
}
