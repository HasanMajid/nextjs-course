import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query); // { id: 'max', clientproject: 'project1' }
  
  return (
    <div>
      <h1>The Selected Project Page for a Given Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
