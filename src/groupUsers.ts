interface Address {
  officeId: number;
  placeId: number;
}

interface Employee {
  name: string;
  login: string;
  surname: string;
  type: 'EMPLOYEE';
  address: Address;
}

interface Contractor {
  name: string;
  login: string;
  surname?: string;
  type: 'CONTRACTOR';
  contractorCompanyName: string;
}

type User = Employee | Contractor;

interface GroupedUsers {
  employees: Array<Employee>;
  contractors: Array<Contractor>;
}

export function groupUsers(users: Array<User>): GroupedUsers {
  const grouped: GroupedUsers = { employees: [], contractors: [] };

  users.forEach(user => {
    if (user.type === 'EMPLOYEE') {
      grouped.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      grouped.contractors.push(user);
    }
  });

  return grouped;
}
