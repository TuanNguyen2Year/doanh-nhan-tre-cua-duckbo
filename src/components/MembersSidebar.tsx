import Image from 'next/image';
import { Member } from '@/types';

interface MembersSidebarProps {
  members: Member[];
}

export default function MembersSidebar({ members }: MembersSidebarProps) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-4 py-3 text-center">
        <h3 className="font-bold text-sm text-gray-700">Hội Viên Mới</h3>
      </div>
      <div className="p-4 space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-primary/10">
              <div className="w-full h-full flex items-center justify-center text-primary font-bold text-sm">
                {member.name.charAt(0)}
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
