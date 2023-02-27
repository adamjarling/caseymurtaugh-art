export default function CurriculumPage() {
  return (
    <>
      <section className="text-center section">
        Description of curriculum. This is so and so...
      </section>

      <div className="container mx-auto">
        <div className="mb-12">
          <div className="aspect-[16/9]">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRtoe067qEGLro6fM_V5fSDyT2mj5ShP7JYX0K5qKK0bqNl7ZPZWg_UTRYg9FVoSKhUiTGJa2isK53m/embed?start=false&loop=false&delayms=5000"
              width="100%"
              height="100%"
              allowFullScreen={true}
            ></iframe>
            <h2 className="mt-3 text-right">
              Ima title <br />
              January 2023
            </h2>
          </div>
        </div>

        <div className="mb-12">
          <div className="aspect-[16/9]">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRtoe067qEGLro6fM_V5fSDyT2mj5ShP7JYX0K5qKK0bqNl7ZPZWg_UTRYg9FVoSKhUiTGJa2isK53m/embed?start=false&loop=false&delayms=5000"
              width="100%"
              height="100%"
              allowFullScreen={true}
            ></iframe>
            <h2 className="mt-3 text-right">Ima another title</h2>
          </div>
        </div>
      </div>
    </>
  );
}
