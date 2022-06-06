import { useRouter } from "next/router";
import CreateCondition from "../create/index.page";
// import CreateRole from "../create";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <>{pid && <CreateCondition pid={pid?.toString()} />}</>;
}

export default Edit;
