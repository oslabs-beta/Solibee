
//need to find an alternative to innerHTML
export function Code(props) {
  return (
    <div
      class="contents [&>pre]:overflow-auto [&>pre]:rounded-md [&>pre]:py-2 [&>pre]:pl-2 [&>pre]:pr-12 [&>pre]:md:pr-2"
      innerHTML={props.html}
    />
  );

}

export const CodeToString = `function Code(props) {
  return (
    <div
      class="contents [&>pre]:overflow-auto [&>pre]:rounded-md [&>pre]:py-2 [&>pre]:pl-2 [&>pre]:pr-12 [&>pre]:md:pr-2"
      innerHTML={props.html}
    />
  );
}`;