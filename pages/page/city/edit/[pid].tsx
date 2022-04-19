import { useRouter } from "next/router";
import CreateRole from "../create.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateRole pid={pid?.toString()}></CreateRole>;
}

export default Edit;
