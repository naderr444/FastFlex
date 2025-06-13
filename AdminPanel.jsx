
import React, { useState } from 'react';

function AdminPanel() {
  const [users, setUsers] = useState([
    { username: 'user1', balance: 100 },
    { username: 'user2', balance: 200 },
  ]);

  const updateBalance = (index, amount) => {
    const newUsers = [...users];
    newUsers[index].balance += amount;
    setUsers(newUsers);
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div style={{ direction: 'rtl', padding: '20px', backgroundColor: '#fff' }}>
      <h2>📋 لوحة تحكم المدير</h2>
      <table border="1" style={{ margin: 'auto', width: '80%' }}>
        <thead>
          <tr><th>اسم المستخدم</th><th>الرصيد</th><th>إجراءات</th></tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.balance} جنيه</td>
              <td>
                <button onClick={() => updateBalance(index, 10)}>+10</button>
                <button onClick={() => updateBalance(index, -10)}>-10</button>
                <button onClick={() => deleteUser(index)}>❌ حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
