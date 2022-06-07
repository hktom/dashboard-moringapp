import { useRouter } from "next/router";
import CreateUser from "../create/index.page";

function Edit() {
  const router = useRouter();
  const { pid } = router.query;
  return <>{pid && <CreateUser pid={pid?.toString()} />}</>;
}

export default Edit;
