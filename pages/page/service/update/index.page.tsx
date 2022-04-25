import { useRouter } from "next/router";
import CreateService from "../create/index.page";

function UpdateService() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <CreateService pid={pid?.toString()} />
    </>
  );
}

export default UpdateService;