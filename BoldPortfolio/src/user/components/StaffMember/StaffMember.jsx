export function StaffMember({ img, role }) {
  return (
    <div>
      <img src={img} alt="Staff member" />
      <h3>{role}</h3>
    </div>
  );
}