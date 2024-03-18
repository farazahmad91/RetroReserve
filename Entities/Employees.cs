namespace Entities
{
    public class Employees
    {
        public int EmpId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public int RoleId { get; set; }
        public string? RoleName { get; set; }
        public string? Image { get; set; }
        public decimal Salary { get; set; }
        public string? Phone { get; set; }
        public string? Gender { get; set; }
        public string? DOB { get; set; }
        public string? AdharNo { get; set; }
        public string? Address { get; set; }
        public int IsActive { get; set; }
        public int Status { get; set; }
        public string? CreditOn { get; set; }
    }
    public class EmployeesVM : Employees
    {
        public IEnumerable<EmployeeRoleMaster> employeeRoleMaster { get; set; }

        public IEnumerable<Employees> Employee { get; set; }
    }
}
