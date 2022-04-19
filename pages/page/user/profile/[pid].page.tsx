import { useRouter } from "next/router";
import Profile from "../../profile/index.page";

function UserProfile() {
  const router = useRouter();
  const { pid } = router.query;
  return <Profile pid={pid?.toString()}></Profile>;
}

export default UserProfile;
