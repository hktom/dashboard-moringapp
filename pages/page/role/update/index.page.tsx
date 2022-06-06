import { useRouter } from "next/router";
import CreateRole from "../create/index.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <>{pid && <CreateRole pid={pid?.toString()} />}</>;
}

export default Edit;
