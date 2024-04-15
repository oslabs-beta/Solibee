//to use wrap inside a div with the following attributes:

// data-orientation='horizontal'
// class='steps relative mb-12 ml-4 border-l z-0'

//Careful not to add p tags inside the outer div. Every p tag increments the steps counter by 1

export default function Step(props) {
  return (
    <p
      class='step-counter relative mt-8 pl-10 text-xl
             font-semibold tracking-tight before:absolute before:left-0 before:z-20 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md
             before:text-[0.9rem] before:font-bold before:text-slate-700 before:shadow-md before:ring-2 before:ring-slate-900/5 before:content-[counter(step)]'
    >
      {props.step}
    </p>
  );
}
