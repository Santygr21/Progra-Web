import { StaffMember, HeaderTitle } from './../../components'; 

const staffData = [
  { img: '', role: 'FRONTEND DEVELOPER' },
  { img: '', role: 'BACKEND DEVELOPER' },
  { img: '', role: 'UI DESIGNER' },
  { img: '', role: 'UX DESIGNER' },
];

export function StaffPage (){
  return (
    <div>
      <HeaderTitle title="Staff" />
      <div className="staffMembers">
        {staffData.map((staff, index) => (
          <StaffMember key={index} img={staff.img} role={staff.role} />
        ))}
      </div>
    </div>
  );
};