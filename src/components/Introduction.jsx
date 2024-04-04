import Contributors from "./Contributors";

export default function Introduction() {
  //   //Introduction
  //   //Features
  //   //Questions/Community
  //   //Thanks/inspired by
  //   //Designed by
  return (
    // previous article class styling : max-w-3xl mx-auto pt-10 w-10/12
    <article class="prose mx-auto w-10/12 max-w-[800px] bg-white/[0.9]">
      <header>
        <h1 class="mb-4 text-4xl font-bold">Introduction</h1>
        <p>
          Solibee is an open-source collection of accessible and customizable
          components for Solid.JS. Solibee has easily integratable components:
          See a component you like? Copy and paste the code into your project!
        </p>
      </header>

      <section class="mt-8">
        {/* font-bold  mb-4 */}
        <h2 class=" mb-2 border-b text-2xl font-bold">Features</h2>
        <ul class="list-inside list-disc space-y-1">
          <li>
            <span class="font-semibold">Accessible:</span> Designed with
            accessibility in mind to ensure all users can interact with the
            components. Our components follow{" "}
            <a
              href="https://www.w3.org/WAI/ARIA/apg/"
              target="_blank"
              class="underline underline-offset-2 transition-colors hover:text-orange-200"
              rel="noopener noreferrer"
            >
              WAI-ARIA design patterns.{" "}
            </a>
          </li>
          <li>
            <span class="font-semibold">Customizable:</span> You can easily
            customize the components to fit the design and needs of your
            project.
          </li>
          <li>
            <span class="font-semibold">Documented:</span> Comprehensive
            documentation provided for each component to facilitate easy usage
            and understanding.
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2 class="mb-4 border-b text-2xl font-bold">Questions/Community</h2>
        <subsection>
          Solibee is an open-source project built for the Solid.JS community. If
          you have any questions, feedback, or suggestions, feel free to reach
          out or contribute to our project by sending a PR to{" "}
          <a
            href="https://github.com/oslabs-beta/Solibee"
            target="_blank"
            class="underline underline-offset-2 transition-colors hover:text-orange-200"
            rel="noopener noreferrer"
          >
            {" "}
            our GitHub.{" "}
          </a>
        </subsection>
      </section>

      <section class="mt-8">
        <h2 class="mb-4 border-b text-2xl font-bold">Inspiration</h2>
        <p>Some of the projects that inspired our project:</p>
        <ul class="list-inside list-disc">
          <li>
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              class="solibee-link"
              rel="noopener noreferrer"
            >
              shadcn/ui{" "}
            </a>
          </li>
          <li>
            <a
              href="https://corvu.dev/"
              target="_blank"
              class="solibee-link"
              rel="noopener noreferrer"
            >
              corvu.dev/{" "}
            </a>
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2 class="mb-4 border-b text-2xl font-bold">Designed By</h2>
        <p>
          This collection of Solid.js components was designed and developed by
          these amazing people!
          <Contributors
            githubHandles={[
              "tenn501",
              "trialnerr",
              "neulseo2",
              "CK-Zhao",
              "marsbird",
            ]}
          />
        </p>
      </section>
    </article>
  );
}
