//need to find an alternative to innerHTML
export default function Code(props) {
  return (
    <div
      class="contents [&>pre]:overflow-auto [&>pre]:rounded-md [&>pre]:py-2 [&>pre]:pl-2 [&>pre]:pr-12 [&>pre]:md:pr-2 [&>pre]:font-mono"
      innerHTML={props.html}
    />
  );
}


