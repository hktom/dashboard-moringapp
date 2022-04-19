import { useRouter } from "next/router";
import CreateUser from "../create.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateUser pid={pid?.toString()}></CreateUser>;
}

export default Edit;
