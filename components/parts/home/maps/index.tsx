export default function Maps() {
  return (
    <section id="maps">
      <div className="bg-white">
        <div className="flex px-6 md:px-10 py-12">
          <div className="flex w-full mx-auto max-w-5xl items-center">
            <div className="bg-gray-300 w-full h-96 relative z-0 rounded-xl shadow-lg shadow-slate-100">
              <div className="absolute inset-0 flex justify-center items-center z-10">
                <iframe
                  className="rounded-xl border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6225578280523!2d110.2080237114163!3d-7.615984192367647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8d697efd283d%3A0xe58f94f3231a4be3!2sVW%20WISATA%20BOROBUDUR!5e0!3m2!1sen!2sus!4v1688821415997!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
