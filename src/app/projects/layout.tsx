export default async function Layout(props: {
  allProjects: React.ReactNode,
  projectView: React.ReactNode
}) {
  return (
    <>
      {props.projectView}
      {props.allProjects}
    </>
  )
}