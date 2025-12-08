export default function AboutShell() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            More Than Just Plastic. It’s Passion.
          </h1>
          <p className="text-lg text-gray-500">
            Welcome to <strong>El S7s Group</strong>, the ultimate destination
            for collectors, fans, and the young at heart. Whether you are
            hunting for that elusive chase variant, building a 1/12 scale army,
            or just looking for the perfect gift to spark a child&apos;s
            imagination, you’ve landed in the right place.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold">Our Origin Story</h2>
          <p className="mb-2">
            <strong>El S7s Group</strong> wasn’t built in a boardroom; it was
            built by collectors, for collectors. It started in{' '}
            <strong>[Year]</strong> when <strong>[Founder Name/We]</strong>{' '}
            realized that buying action figures online was often a gamble.
            Between crushed boxes, delayed pre-orders, and impersonal service,
            the joy of &quot;the hunt&quot; was getting lost. We decided to
            change that.
          </p>
          <p>
            We set out to build the toy store we always wanted to shop at—one
            that respects the art of the collectible and the passion of the fan.
            From a humble beginning in a [garage/small room/market stall], we
            have grown into a community hub serving thousands of happy customers
            worldwide.
          </p>
        </section>

        <section className="mb-10 rounded-lg p-6">
          <h2 className="mb-2 text-2xl font-semibold">
            The Collector’s Pledge
          </h2>
          <p className="mb-4">
            We know the pain of receiving a &quot;Mint&quot; figure in a bubble
            mailer that looks like it went twelve rounds with the Hulk. That is
            why we adhere to three core principles:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Mint Condition Mindset:</strong> We inspect our inventory.
              If a box is damaged, we mark it as such. We treat every item as a
              display piece.
            </li>
            <li>
              <strong>Bulletproof Packaging:</strong> We don&apos;t just throw
              things in a box. We use sturdy cardboard, ample bubble wrap, and
              protection to ensure your figure arrives looking exactly as it did
              when it left the factory.
            </li>
            <li>
              <strong>Authenticity Guaranteed:</strong> No knock-offs. No
              bootlegs. We source directly from authorized distributors and
              reputable manufacturers. You get the real deal, every time.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold">What We Carry</h2>
          <p className="mb-4">
            Our shelves are stocked with the best brands in the industry. We
            specialize in:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The Heavy Hitters:</strong> Hasbro (Marvel Legends, Star
              Wars Black Series, G.I. Joe), Mattel, and McFarlane Toys.
            </li>
            <li>
              <strong>Imports &amp; High-End:</strong> SH Figuarts, Mafex, Storm
              Collectibles, and Mezco One:12.
            </li>
            <li>
              <strong>Anime &amp; Manga:</strong> Figma, Nendoroid, and
              Banpresto statues.
            </li>
            <li>
              <strong>Nostalgia:</strong> Vintage-style figures, TMNT, and
              Transformers.
            </li>
          </ul>
        </section>

        <section className="mb-10 rounded-lg p-6">
          <h2 className="mb-2 text-2xl font-semibold">Join The Hunt</h2>
          <p className="mb-2">
            We are more than just a store; we are a community of geeks, gamers,
            and collectors. If you have a question about a pre-order, need
            advice on a gift, or just want to debate who is the best Batman,
            reach out to us. We love talking shop.
          </p>
          <p>
            Thank you for choosing <strong>El S7s Group</strong> to build your
            collection.
          </p>
          <blockquote className="text-red mt-4 border-l-4 border-red-400 pl-4 text-red-700 italic">
            &quot;Collecting is not just buying objects; it is collecting
            memories.&quot;
          </blockquote>
        </section>

        <section className="mb-10">
          <h3 className="mb-2 text-xl font-semibold">
            [Optional: Meet the Team]
          </h3>
          <div className="mb-4 flex flex-col items-center gap-6 md:flex-row">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-400">
              {/* [Insert a photo of you or your team here] */}
              <span>Photo</span>
            </div>
            <ul className="space-y-2">
              <li>
                <strong>[Name]</strong> – Head Geek &amp; Founder
                <br />
                <span className="text-gray-600">
                  Favorite Line: Star Wars Black Series
                </span>
              </li>
              <li>
                <strong>[Name]</strong> – Shipping Wizard
                <br />
                <span className="text-gray-600">
                  Favorite Line: Marvel Legends
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-xl font-semibold">How to use this text:</h3>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              Customize the Brackets: Replace El S7s Group, [Year], and [Founder
              Name] with your actual details.
            </li>
            <li>
              Edit the Brands: If you sell Funko Pops or LEGO but not Imports,
              adjust the &quot;What We Carry&quot; section to reflect your
              actual inventory.
            </li>
            <li>
              Add Photos: An About page works best with photos of your
              warehouse, your shelves, or your team packing boxes. It builds
              trust.
            </li>
          </ul>
          <p>
            Would you like me to create a shorter, &quot;Instagram Bio&quot;
            version of this text, or perhaps write a &quot;Shipping Policy&quot;
            to go along with it?
          </p>
        </section>
      </section>
    </main>
  );
}
