import { useRouter } from "next/router";
import CreateCondition from "../create.page";
// import CreateRole from "../create";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <CreateCondition pid={pid?.toString()}></CreateCondition>;
}

export default Edit;
