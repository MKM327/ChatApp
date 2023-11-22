import { Profile } from "@/hooks/Messages/useGetProfile";

interface IProfileProps {
  profile: Profile;
}
export default function Account({ profile }: IProfileProps) {
  return (
    <div className="flex items-center justify-between w-full gap-5 pl-5 pt-3 pr-5 pb-5 border-b border-text-color">
      <div className="flex items-center gap-3">
        <div className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white"></i>
        </div>
        <div>
          <h4 className="text-white font-medium">{profile?.firstName}</h4>
          <span className="text-text-color text-xs">my Account</span>
        </div>
      </div>
      <div className="w-10 rounded-full border border-text-color flex items-center justify-center aspect-square">
        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
      </div>
    </div>
  );
}
