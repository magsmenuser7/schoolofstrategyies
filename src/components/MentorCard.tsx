
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface MentorProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const MentorCard = ({ name, role, bio, image }: MentorProps) => {
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-1">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32 rounded-full mb-4">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-purple-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-center">{bio}</p>
      </div>
    </div>
  );
};

export default MentorCard;
