
//to use wrap inside a div with the following attributes: 
      
// data-orientation='horizontal'
// class='steps relative mb-12 ml-4 border-l z-0'

//Careful not to add p tags inside the outer div. Every p tag increments the steps counter by 1

export default function Step(props){
  return (
    <p
      class='step-counter mt-8 text-xl font-semibold tracking-tight
             relative pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.9rem]
             before:font-bold before:text-slate-700 before:rounded-md before:shadow-md before:ring-2 before:ring-slate-900/5 before:z-20'
    >
      {props.step}
    </p>
  );
}