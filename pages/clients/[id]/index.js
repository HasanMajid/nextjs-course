import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query); // { id: 'max' }

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/max/project1"); // alternative way to do this
    router.push({
      pathname: "/clients/[id]/[clientproject]",
      query: { id: "max", clientproject: "project1" },
    });
    // router.replace("/clients/max/project1"); // replace the current page with this page (you can't go back to this previous page)
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
