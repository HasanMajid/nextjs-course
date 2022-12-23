import { useRouter } from "next/router";

function PorfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // { projectid: 'project1' }

  //send a request to some backend API
  //to fetch the project with an id of router.query.projectid
  
  return <div>Porfolio Project Page</div>;
}

export default PorfolioProjectPage;
