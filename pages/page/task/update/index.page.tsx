import { useRouter } from "next/router";
import CreateTask from "../create/index.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateTask pid={pid?.toString()}></CreateTask>;
}

export default Edit;
