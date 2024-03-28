export default function Docs() {
  //   //Introduction
  //   //Features
  //   //Questions/Community
  //   //Thanks/inspired by
  //   //Designed by
  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      <header>
        <h1 class="font-bold text-4xl mb-4">Introduction</h1>
        <p class="text-lg">
          An open-source collection of accessible, customizable Solid.js
          components. See a component you like? Copy and paste the code into
          your project!
        </p>
      </header>

      <section class="mt-8">
        <h2 class="font-bold text-2xl mb-4">Features</h2>
        <ul class="list-disc list-inside">
          <li>
            <span class="font-bold">Accessible:</span> Designed with
            accessibility in mind to ensure all users can interact with the
            components.
          </li>
          <li>
            <span class="font-bold">Customizable:</span> You can easily
            customize the components to fit the design and needs of your
            project.
          </li>
          <li>
            <span class="font-bold">Documentation:</span> Comprehensive
            documentation provided for each component to facilitate easy usage
            and understanding.
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2 class="font-bold text-2xl mb-4">Questions/Community</h2>
        <p>
          If you have any questions, feedback, or suggestions, feel free to
          reach out or send a PR to our project at ----
        </p>
      </section>

      <section class="mt-8">
        <h2 class="font-bold text-2xl mb-4">Our project is inspired By</h2>
        <p>
          We would like to express our gratitude to the following individuals
          and projects that inspired and supported this initiative:
        </p>
        <ul class="list-disc list-inside">
          <li>shadcn/ui</li>
          <li>corvu</li>
        </ul>
      </section>

      <footer class="mt-8">
        <h2 class="font-bold text-2xl mb-4">Designed By</h2>
        <p>
          This collection of Solid.js components was designed and developed by
          the Solibee Team. --- our github pages here
        </p>
      </footer>
    </div>
  );
}

