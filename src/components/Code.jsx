
//need to find an alternative to innerHTML
export default function Code(props) {
  return (
    <div
      class="min-h-[350px] w-full h-full flex-wrap justify-center items-center bg-slate-100"
      innerHTML={props.html}
    />
  );

}
