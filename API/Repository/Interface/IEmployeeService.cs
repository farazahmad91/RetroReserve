using Entities;
namespace API.Repository.Interface
{
    public interface IEmployeeService
    {
        public Task<Response> AddOrUpdateEmployee(Employees employees);
        public EmployeesVM GetEmployeeById(int id);
        public IEnumerable<Employees> GetChefs();
        public IEnumerable<Employees> GetEmployeeList();
        public Task<int> UpdateEmployeeStatus(Employees employees);
        public int DeleteEmployee(int id);
        public Employees GetEmployeeDetailById(int id);
        public IEnumerable<Employees> GetActiveDeliveryBoy();
        public IEnumerable<DeliveredOrder> GetOrderListByDboy(string email);
    }
}
